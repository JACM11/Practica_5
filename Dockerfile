FROM node:19.2-alpine3.16

COPY package*.json ./

WORKDIR /app

RUN npm install

COPY . .

EXPOSE 80

CMD [ "npm", "run" ,"dev"]