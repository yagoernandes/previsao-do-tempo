from flask import Flask, request
from .routes import *

app = Flask(__name__)
routes(app)