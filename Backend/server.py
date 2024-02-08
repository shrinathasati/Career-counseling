from flask import Flask, render_template, request, redirect, url_for
import os
import fitz  # PyMuPDF
from docx import Document
import smtplib
import ssl
from email.message import EmailMessage
app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'pdf'}
email_sender = 'Your email'
email_password = ' your email password'
email_receiver = 'receivers email'
dic={
    'machine learning': "Company: Google Salary: 40000 stipend job description:  Machine Learning Engineer: Develop and deploy machine learning models, analyze data, and optimize algorithms. Collaborate with cross-functional teams to implement solutions and enhance system performance. Strong programming and mathematical ",

    'web dev':"Company: Facebook Salary: 30000 stipend Job description: Design, code, and maintain responsive, user-friendly websites. Collaborate with teams to implement features, troubleshoot issues, and optimize performance. Proficient in HTML, CSS, JavaScript, and web frameworks."
}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def fun(message):

    from twilio.rest import Client
    account_sid = 'Your account sid'
    auth_token = 'your authentcation token'
    client = Client(account_sid, auth_token)
    from_number = 'your api key number'
    to_number = 'to the receipient phone number'  # Replace with the recipient's phone number

    message_body = message

    # Send the SMS
    message = client.messages.create(
        body=message_body,
        from_=from_number,
        to=to_number
    )

    print(f"SMS sent with SID: {message.sid}")

def mail_send(message):
    email_sender = 'your email'
    email_password = 'Your email password'
    email_receiver = 'receivers email '
    subject = 'Internship Opportunity from Career mantri'
    body = message
    em = EmailMessage()
    em['From'] = email_sender
    em['To'] = email_receiver
    em['Subject'] = subject
    em.set_content(body)

    # Add SSL (layer of security)
    context = ssl.create_default_context()

    # Log in and send the email
    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_receiver, em.as_string())


def match(text):
    if 'machine learning' in text:
        message=dic['machine learning']
        # fun(message)
        mail_send(message)
    if 'ML' in text:
        message=dic['machine learning']
        # fun(message)
        mail_send(message)
    if 'data analysis' in text:
        message=dic['machine learning']
        # fun(message)
        mail_send(message)

    if 'data science' in text:
        message=dic['machine learning']
        # fun(message)
        mail_send(message)

    if 'web development' in text:
        message=dic['web dev']
        # fun(message)
        mail_send(message)
        
    if 'website' in text:
        message=dic['web dev']
        # fun(message)
        mail_send(message)

    if 'development' in text:
        message=dic['web dev']
        # fun(message)
        mail_send(message)


@app.route('/upload_resume', methods=['POST'])
def upload_resume():
    if 'resume' not in request.files:
        return "No file selected.", 400

    resume_file = request.files['resume']

    if resume_file.filename == '' or not allowed_file(resume_file.filename):
        return "Invalid file.", 400

    upload_folder = os.path.join(app.config['UPLOAD_FOLDER'], 'resumes')
    os.makedirs(upload_folder, exist_ok=True)
    resume_path = os.path.join(upload_folder, resume_file.filename)
    resume_file.save(resume_path)

    extracted_text = pdf_to_text(resume_path)

    match(extracted_text)

    return {"message": "Resume uploaded successfully.", "extracted_text": extracted_text}


def pdf_to_text(pdf_path):
    pdf_document = fitz.open(pdf_path)
    text = ''
    for page_number in range(pdf_document.page_count):
        page = pdf_document[page_number]
        text += page.get_text()
    pdf_document.close()
    return text

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        if 'resume' not in request.files:
            return redirect(request.url)

        resume_file = request.files['resume']

        if resume_file.filename == '' or not allowed_file(resume_file.filename):
            return redirect(request.url)

        upload_folder = os.path.join(app.config['UPLOAD_FOLDER'], 'resumes')
        os.makedirs(upload_folder, exist_ok=True)
        resume_path = os.path.join(upload_folder, resume_file.filename)
        resume_file.save(resume_path)

        extracted_text = pdf_to_text(resume_path)

        match(extracted_text)

        # print(extracted_text)

        return render_template('success.html', extracted_text=extracted_text)

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
