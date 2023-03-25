FROM node:19.7.0

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 8080

CMD ["node", "index.js"]
