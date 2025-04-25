from flask import Blueprint, redirect, url_for, session
from flask_dance.contrib.google import make_google_blueprint, google
from flask_dance.contrib.github import make_github_blueprint, github
from flask_dance.contrib.facebook import make_facebook_blueprint, facebook

social_auth = Blueprint('social_auth', __name__)

# Google OAuth
google_bp = make_google_blueprint(
    client_id="YOUR_GOOGLE_CLIENT_ID",
    client_secret="YOUR_GOOGLE_CLIENT_SECRET",
    scope=["profile", "email"],
    redirect_url="/login/google/authorized"
)

# GitHub OAuth
github_bp = make_github_blueprint(
    client_id="YOUR_GITHUB_CLIENT_ID",
    client_secret="YOUR_GITHUB_CLIENT_SECRET",
    redirect_url="/login/github/authorized"
)

# Facebook OAuth
facebook_bp = make_facebook_blueprint(
    client_id="YOUR_FACEBOOK_CLIENT_ID",
    client_secret="YOUR_FACEBOOK_CLIENT_SECRET",
    redirect_url="/login/facebook/authorized",
    scope=["email"]
)

# Callback routes
@social_auth.route("/login/google")
def login_google():
    return redirect(url_for("google.login"))

@social_auth.route("/login/github")
def login_github():
    return redirect(url_for("github.login"))

@social_auth.route("/login/facebook")
def login_facebook():
    return redirect(url_for("facebook.login"))

# Fetch user info
@social_auth.route("/login/<provider>/authorized")
def authorized(provider):
    if provider == "google" and google.authorized:
        resp = google.get("/oauth2/v2/userinfo")
        info = resp.json()
    elif provider == "github" and github.authorized:
        resp = github.get("/user")
        info = resp.json()
    elif provider == "facebook" and facebook.authorized:
        resp = facebook.get("/me?fields=id,name,email")
        info = resp.json()
    else:
        return "Login failed", 400

    # Save info to session or DB
    session["user_info"] = info
    return f"Logged in as: {info.get('name', info.get('email'))}"
