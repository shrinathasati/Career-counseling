from flask import Flask, request, jsonify, render_template
from ast import literal_eval
from pymongo import MongoClient
from flask_cors import CORS
import openai

import nltk

nltk.download('stopwords')

from pyresparser import resume_parser


app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": "*"}})


# database connection
client=MongoClient('YOUR_URL')
db=client.get_database('manit')

# opportunity 
@app.route('/opportunity', methods=['GET','POST'])
def add_opportunity():
    
    if request.method == 'POST':
        user_input = request.data
        user_input=literal_eval(user_input.decode('utf-8'))
        title = user_input['title']
        description = user_input['description']
        location=user_input['location']
        deadline=user_input['deadline']
        

        # Store data in MongoDB database
        db.opportunity.insert_one({'title':title, 'description':description,"location":location, 'deadline':deadline})
        
        
        return jsonify({'message': 'Data received successfully'}), 200
    
    data = jsonify(list(db.opportunity.find({}, {'_id': 0})))
    print(data)
    return data, 200


#  chat bot 

@app.route("/chat", methods=["GET", "POST"])
def CustomChatGPT():
    openai.api_key = "API_KEY"

    messages = [{"role": "system", "content": "You are a financial experts that specializes in real estate investment and negotiation"}]

    user_input=request.data
    user_input=literal_eval(user_input.decode('utf-8'))
    user_input=user_input["user_input"]
    print(request.data)
    messages.append({"role": "user", "content": user_input})
    response = openai.ChatCompletion.create(
        model = "gpt-3.5-turbo",
        messages = messages
    )
    ChatGPT_reply = response["choices"][0]["message"]["content"]
    messages.append({"role": "assistant", "content": ChatGPT_reply})
    print(ChatGPT_reply)
    return jsonify({"response":ChatGPT_reply})
    
    
# scan resume 

@app.route('/upload_resume', methods=['POST'])
def upload_resume():
    try:
        # Assuming the file is sent as 'resume' in the form data
        uploaded_file = request.files['resume']

        if uploaded_file:
            # Save the file to a location (optional)
            uploaded_file.save('uploads/' + (uploaded_file.filename))

            # Extract information from the resume
            resume_data = resume_parser(uploaded_file.read())
            return jsonify(resume_data)

        return jsonify({'error': 'No file provided'}), 400

    except Exception as e:
        return jsonify({'error': str(e)}), 500


# fill mannually 

@app.route('/submit_resume', methods=['POST'])
def submit_resume():
    try:
        data = request.json  # Assuming data is sent as JSON
        db.resume.insert_one(data)  # Insert data into MongoDB
        return jsonify({'message': 'Resume submitted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


# Authenticattion 


#  login 
@app.route("/login", methods=["GET", "POST"])
def Login():
    if request.method == 'POST':
        user_input = request.data
        user_input=literal_eval(user_input.decode('utf-8'))
       
        
        existing_user = db.user.find_one({'email': user_input["user"]["email"]})
        
        if not existing_user:
            return jsonify({'message': 'No Email exists'}), 400
        
        
        user_db=db.user.find_one({"email":user_input["user"]["email"]})
        
        if user_db['password']==user_input["user"]["password"]:
            return jsonify({'message': 'Login successful'}), 200
        else:
            return jsonify({'message': 'Invalid email or password'}),401
    
# signup

@app.route("/signup", methods=["GET", "POST"])
def Signup():
    if request.method == 'POST':
        user_input = request.data
        user_input=literal_eval(user_input.decode('utf-8'))
        # print(user_input["user"]["email"])
        # print(type(json.loads(user_input["user"])))
        user_input=json.loads(user_input["user"])
        print(user_input)
        # Check if the email is already registered
        #  print(collection.find_one({"_id": ObjectId("59d7ef576cab3d6118805a20")}))
        
        existing_user = db.user.find_one({'email': user_input["email"]})
        
        if existing_user:
            return jsonify({'message': 'Email already exists'}), 400
        try:
           db.user.insert_one({"name":user_input["name"],"email":user_input["email"], "password":user_input["password"]})
        except Exception as e:
            return "Error in db"
        return jsonify({'message': 'Registration successful'}), 200



if __name__ == '__main__':
    app.run(debug=True)
