from flask_restful import Resource
from ..services import database,functions
import requests

class historico(Resource):
    def __init__(self):
        self.conn = database.conexao().get_connectionJson()
    def get(self):
        sql_historico="select * from previsao"
        self.conn.execute(sql_historico)
        query = self.conn.fetchall()
        return query