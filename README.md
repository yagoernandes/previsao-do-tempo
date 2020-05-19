<p align="center">
   <img src="front/src/assets/imgs/logo.png" width="200"/>
</p>

# Previsão do Tempo

<p align="center">
    <a href="https://github.com/yagoernandes">
        <img src="https://img.shields.io/badge/Author-YagoErnandes-brightgreen" alt="Author" />
    </a>
    <a href="#">
        <img src="https://img.shields.io/github/languages/count/YagoErnandes/previsao-do-tempo?color=brightgreen" alt="Languages" />
    </a>
    <a href="https://github.com/yagoernandes/previsao-do-tempo/stargazers">
        <img src="https://img.shields.io/github/stars/YagoErnandes/previsao-do-tempo?color=brightgreen" alt="Stars" />
    </a>
    <br />
    <a href="https://twitter.com/intent/follow?screen_name=yagoernandes">
        <img src="https://img.shields.io/twitter/follow/yagoernandes?style=social&logo=twitter"
            alt="follow on Twitter"></a>
</p>

> Programa simples para visualizar previsão do tempo utilizando a API do [OpenWeatherMap](https://openweathermap.org/)

<p align="center"><img src=".github/home.png" height="400" width="auto"/></p>
<p align="center"><img src=".github/search.png" height="400" width="auto"/></p>

## :pushpin: Overview  

O programa é composto por 3 partes, Frontend em React(Node), Backend em Flask(Python) e um banco de dados Postgres, todas interligadas com docker e docker-compose.

Para levantar a aplicação completa pelo docker, basta executar:

```shell
docker-compose up
# ou
docker-compose up -d
```

## :iphone: Frontend

O Frontend foi desenvolvido em Typescript utilizando as seguintes dependências:

```
react : Interface
redux : Gerenciador de estado global
redux-Saga : Gerenciador de efeitos secundários
styled-components : Componentes CSS
dotenv : Carregar variáveis de ambiente
chart.js : Gráficos
react-chartjs-2 : Encapsulamento do chart.js no react
axios : Consulta a API
```

Para desenvolvimento, além das tipagens padrões das bibliotecas, foi utilizado as seguintes dependências:

```
redux-devtools-extension : Comunicação entre a store do Redux e o Chrome devtools
eslint : Padrões de código
prettier : Formatação de código de acordo com os padrões
```

##### Para executar compilar a imagem Docker, execute:

```shell
docker build -t teste-yago-front ./front/
```

##### Para subir, execute:

```shell
docker run -p 80:80 -d teste-yago-front
```

##### Para executar localmente, execute:

```shell
npm install

npm start --prefix front/
```

###### Configuração de conexão com o servidor:

- ./front/src/config/environments.ts

## :gear: Backend

O Backend foi construído usando a framework Flask.

##### Para subir, execute:

```shell
python ./api/api/run.py
```

###### Configuração de conexão com o banco:

- ./api/api/app/services/database.py

## :dvd: Banco de dados

O banco possui um arquivo Dockerfile para gerar uma imagem de container docker com o banco já instalado e configurado.

##### Para compilar execute:

```shell
docker build -t teste-yago-db ./api/db/
```

##### Para subir, execute:

```shell
docker run -p 5432:5432 -d teste-yago-db
```
