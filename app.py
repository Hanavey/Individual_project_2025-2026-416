from flask import Flask, render_template
from data.places import PLACES

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html", places=PLACES)


if __name__ == "__main__":
    app.run(debug=True)
