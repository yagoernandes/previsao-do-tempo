from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class bico(Resource):
    def get(self):
     #    conn.execute("select * from bico") # This line performs query and returns json result
     #    query = conn.fetchall()
     #    return query # Fetches first column that is Employee ID

api.add_resource(bico, '/bico') # Route_1


if __name__ == '__main__':
     app.run(port=5002)