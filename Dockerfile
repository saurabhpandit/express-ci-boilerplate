FROM node:10 AS build
WORKDIR /opt/express-ci-boilerplate
COPY package*.json ./

# install dep modules
RUN npm install

COPY . .
EXPOSE 8080

CMD ["node", "src/app.js"]
