FROM node:18.18.2

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "./app.js"]