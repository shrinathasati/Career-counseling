!pip install twilio
def fun(message):

  from twilio.rest import Client

# Your Twilio Account SID and Auth Token from twilio.com/console
  account_sid = 'ACb5b59f965b5f89f82fa6110425f933d6'
  auth_token = '92702e653a7ffd87ecdaaec4a9e2d8bf'

# Create a Twilio client
  client = Client(account_sid, auth_token)

  # Your Twilio phone number (bought or verified) and the recipient's phone number
  from_number = '+16317107894'
  to_number = '+918817755431'  # Replace with the recipient's phone number

  # Your message
  message_body = message

  # Send the SMS
  message = client.messages.create(
      body=message_body,
      from_=from_number,
      to=to_number
  )

  print(f"SMS sent with SID: {message.sid}")

a=input("enter your details")
dic={'machine learning':"company name: Google salary:40K job discription:  Machine learning opportunities abound across industries, involving data-driven problem-solving, AI research, ethical considerations, and continuouzs skill development. Dive into impactful roles, addressing challenges and shaping the future.",'web development':"company name : microsoft salary: 40K job desription: Web dev intern crafts websites, gaining hands-on experience in coding, design, and problem-solving. Learns to collaborate, uses technologies like HTML, CSS, and JavaScript, and contributes to real-world projects."}

if 'machine learning' in a:
    message=dic['machine learning']
    fun(message)
if 'ML' in a:
    message=dic['machine learning']
    fun(message)
if 'data analysis' in a:
    message=dic['machine learning']
    fun(message)

if 'data science' in a:
    message=dic['machine learning']
    fun(message)
if 'web development' in a:
    message=dic['machine learning']
    fun(message)
if 'website' in a:
    message=dic['machine learning']
    fun(message)
if 'development' in a:
    message=dic['machine learning']
    fun(message)
