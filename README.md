# Teste de conhecimentos técnicos Fullstack

O programa é composto por 3 partes, Frontend em React(Node), Backend em Flask(Python) e um banco de dados Postgres.

## Frontend

O Frontend foi desenvolvido em Typescript utilizando as seguintes dependências:

###### react : Interface
###### redux : Gerenciador de estado global
###### redux-Saga : Gerenciador de efeitos secundários
###### styled-components : Componentes CSS
###### dotenv : Carregar variáveis de ambiente
###### chart.js : Gráficos
###### react-chartjs-2 : Encapsulamento do chart.js no react
###### axios : Consulta a API

Para desenvolvimento, além das tipagens padrões das bibliotecas, foi utilizado as seguintes dependências:

###### redux-devtools-extension : Comunicação entre a store do Redux e o Chrome devtools
###### eslint : Padrões de código
###### prettier : Formatação de código de acordo com os padrões


## Backend

O Backend foi construído usando a framework Flask.

##### Para subir, execute:
```shell
python ./api/api/run.py
```


## Banco de dados

O banco possui um arquivo Dockerfile para gerar uma imagem de container docker com o banco já instalado e configurado.

##### Para compilar execute:
```shell
docker build -t db-teste-yago .
```

##### Para subir, execute:
```shell
docker run -p 5432:5432 db-teste-yago
```
