from flask_restful import Api
from . import cidade
from . import historico

def routes(app):
    api = Api(app)
    api.add_resource(cidade.cidade, '/cidade/<cidade>')
    api.add_resource(historico.historico, '/historico')
    return api