from flask import Flask, url_for, redirect, render_template

app = Flask(__name__)
app.config['SECRET_KEY'] = '2fex6bw*mt03ocad82q1loylh68#kik7!'
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route("/")
def index():
    return render_template('home.html')

if __name__ == "__main__":
    app.run(debug=True)
