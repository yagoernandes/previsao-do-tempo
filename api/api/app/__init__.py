from flask import Flask, request
from .routes import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
routes(app)