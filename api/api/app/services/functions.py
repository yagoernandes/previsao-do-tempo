from ..services import database
from datetime import datetime 

class tratamento():

    def __init__(self,dados):
        self.conn = database.conexao().get_connection()
        self.dados = dados
        self.dados_insert=''

    def insert(self,data_insert):
        try:
            dados = []
            for data in data_insert:
                dados.append(data_insert[data])
            dados = str(dados).replace('[','').replace(']','')
            data_historico = str(datetime.today()).split('.')[0]
            sql_insert = f"""insert into previsao (id_cidade, name, country, dt, temp, feels_like, temp_min, temp_max, preasure, sea_level, grnd_level, humidity, temp_kf, main, description, icon, speed, deg, dt_txt,data_historico) VALUES (
                {dados},'{data_historico}'
            )"""
            cursor = self.conn.cursor()
            cursor.execute(sql_insert)
            self.conn.commit()
        except:
            return 'erro ao inserir'

    def verifica(self):
        for data in self.dados:
            sql_verifica=f"""select * from previsao where id_cidade={data['id']} and dt_txt='{data['dt_txt']}'"""
            cursor = self.conn.cursor()
            cursor.execute(sql_verifica)
            query = cursor.fetchall()
            if len(query) == 0:
                self.insert(data)