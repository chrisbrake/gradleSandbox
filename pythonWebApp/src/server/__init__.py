from flask import Flask, render_template

app = Flask(__name__,
            static_folder='../static/dist',
            template_folder='../static/')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/hello')
def hello():
    return "<h1>Hello from Flask</h1>"
