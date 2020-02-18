FROM node:12.2.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app

RUN npm install && npm install react-scripts@3.0.1 -g

CMD ["npm", "start"]