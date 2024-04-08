from flask import Flask
from flask_cors import CORS, cross_origin

import json
import random
import requests
import creds

app = Flask(__name__)
cors = CORS(app)

API_KEY = creds.API_KEY

 
 
