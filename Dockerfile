FROM node:10-alpine AS build
WORKDIR /opt/express-ci-boilerplate
COPY package*.json ./

# install dep modules
RUN npm install

# Bundle app source
FROM node:10-alpine
WORKDIR /opt/express-ci-boilerplate
# Capture SHA and persist it env
ARG SHA
ENV SHA=${SHA}
COPY --from=build /opt/express-ci-boilerplate .
COPY . .
EXPOSE 8080

CMD ["node", "src/app.js"]
