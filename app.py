from flask import Flask, make_response,render_template,request,jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
app = Flask(__name__)

@app.after_request
def add_header(response):
    response.headers['Cache-Control'] = 'no-store'
    return response

@app.route('/')
def home():
    response = make_response(render_template('index.html'))
    response.headers['Cache-Control'] = 'no-store'
    return response


@app.route('/send_email', methods=['POST'])
def send_email():
    name = request.form['fname']
    name2 = request.form['lname']
    email = request.form['email']
    message = request.form['message']
    # Email Penerima
    sender_email = "example@gmail.com"
    # Password email untuk Aplikasi
    password = "qsit jepf axjg skie "
    
    subject = "New Message from Contact Form"

    msg = MIMEMultipart()
    msg['From'] = "Client"
    msg['To'] = sender_email
    msg['Subject'] = subject
    
    body = "Name: {} {}\nEmail: {}\nMessage:\n{}".format(name, name2, email, message)

    msg.attach(MIMEText(body, 'plain'))
    
    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(sender_email, password)
        server.send_message(msg)

    
    return jsonify({'result':'success'})


if __name__ == '__main__':  
    app.run('0.0.0.0',port=8000,debug=True)