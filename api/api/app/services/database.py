import psycopg2
import psycopg2.extras 

class conexao():

    def __init__(self):
        self.dbname='teste_ial'
        self.user ='postgres'
        self.host = 'localhost' 
        self.port = '5432'
        self.password= 'zenerial'

    def get_connection(self):        
        db_connect = psycopg2.connect("dbname="+self.dbname+" user="+self.user+" host="+self.host+" port="+self.port+" password="+self.password)
        db_connect.set_client_encoding('latin1') 
        return db_connect

    def get_connectionJson(self):
        db_connect = psycopg2.connect("dbname="+self.dbname+" user="+self.user+" host="+self.host+" port="+self.port+" password="+self.password)
        db_connect.set_client_encoding('latin1') 
        conn = db_connect.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        return conn