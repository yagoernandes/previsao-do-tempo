from flask_restful import Resource
from ..services import database,functions
import json
import requests

class cidade(Resource):
    def __init__(self):
        self.functions = functions
    def get(self,cidade):
        api_url = f"http://api.openweathermap.org/data/2.5/forecast?q={cidade}&appid=230394d0d4e46b5c16ebe825e188e2b0"
        response = requests.get(api_url)
        if response.status_code == 200:
            self.jsons = json.loads(response.content.decode('utf-8'))
            saida  = []
            ids = self.jsons['city']['id']
            name = self.jsons['city']['name']
            country = self.jsons['city']['country']
            for data in self.jsons['list']:           
                layout = {
                            "id": ids,
                            "name": name,
                            "country": country,
                            "dt": data['dt'],
                            "temp": data['main']['temp'],
                            "feels_like": data['main']['feels_like'],
                            "temp_min": data['main']['temp_min'],
                            "temp_max": data['main']['temp_max'],
                            "pressure": data['main']['pressure'],
                            "sea_level": data['main']['sea_level'],
                            "grnd_level": data['main']['grnd_level'],
                            "humidity": data['main']['humidity'],
                            "temp_kf": data['main']['temp_kf'],
                            "main": data['weather'][0]['main'],
                            "description": data['weather'][0]['description'],
                            "icon": data['weather'][0]['icon'],
                            "speed": data['wind']['speed'],
                            "deg": data['wind']['deg'],
                            "dt_txt": data['dt_txt'] 
                        }

                saida.append(layout)

            self.functions.tratamento(saida).verifica()
            return saida
        else:
            return {"status":404}