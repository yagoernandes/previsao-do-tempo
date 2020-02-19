from flask import Flask, request
from .routes import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins='*')
routes(app)
app.run(port=5000, host='0.0.0.0')