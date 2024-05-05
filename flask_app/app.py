from flask import Flask, render_template, request, redirect, session, url_for
from flask_cors import CORS
from flask import jsonify

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "http://localhost:3000"}}, supports_credentials=True)
app.secret_key = "i"

ID = "hello"
PW = "world"


@app.route("/")
def home():
    if "userID" in session:
        return render_template("login.html", username=session.get("userID"), login=True)
    else:
        return render_template("login.html", login=False)


@app.route("/login", methods=["POST"])
def login():
    global ID, PW
    data = request.json
    _id_ = data.get("loginId")
    _password_ = data.get("loginPW")

    if ID == _id_ and _password_ == PW:
        session["userID"] = _id_
        return jsonify({"success": True})
    else:
        return jsonify({"success": False}), 401


@app.route("/logout")
def logout():
    session.pop("userID")
    return redirect(url_for("login"))


if __name__ == "__main__":
    app.run(port=5000, debug=True)
