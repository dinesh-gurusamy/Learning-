from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_dance.contrib.google import google
from routes.auth import auth_bp
from routes.social_auth import social_auth, google_bp, github_bp, facebook_bp
from utils.db import init_db
app = Flask(__name__)

@app.route('/')
def home():
    print("Received request at '/' endpoint")
    return "Welcome to Smart Learning-Based AI Backend 👋"

app.secret_key = 'super-secret-key'  # Should use env var

app.config['JWT_SECRET_KEY'] = 'super-secret-jwt'

CORS(app)
jwt = JWTManager(app)
init_db()

# Register Blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(social_auth)
app.register_blueprint(google_bp, url_prefix="/login")
app.register_blueprint(github_bp, url_prefix="/login")
app.register_blueprint(facebook_bp, url_prefix="/login")
if __name__ == '__main__':
    print("Flask server starting...")
    app.run(debug=True)
