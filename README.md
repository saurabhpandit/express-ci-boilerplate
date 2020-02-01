# express-ci-boilerplate

## Summary
Boilerplate repository to kickstart REST API projects using Express, TravisCI &amp; Docker

This repository includes the basic scaffolding required for each team to kickoff their projects. It defines a comprehensive pipeline that has following stages: test, build, publish. Aim of this repository is to provide consistency in delivery.

## Build, Test and Run on development environment
```npm install``` to install modules
```npm test``` to run tests
```npm run start``` to start development server

## Test, Build & Publish using travis-ci
### Test stage
```
npm install
npm test
```
Installs dependency modules and runs test

### Build & Publish stage
```
echo "$DOCKER_PASS" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build -t $DOCKER_USERNAME/express-ci-boilerplate:$TRAVIS_BUILD_NUMBER --build-arg SHA=$(git rev-parse --short HEAD) .
docker images
docker tag $DOCKER_USERNAME/express-ci-boilerplate:$TRAVIS_BUILD_NUMBER $DOCKER_USERNAME/express-ci-boilerplate:latest
docker push $DOCKER_USERNAME/express-ci-boilerplate:$TRAVIS_BUILD_NUMBER
docker push $DOCKER_USERNAME/express-ci-boilerplate:latest
```
Builds docker image and publishes it to dockerhub.
To set DOCKER_USERNAME & DOCKER_PASS in travis environment variables, use https://hub.docker.com/r/skandyla/travis-cli/ docker image or install travis gem locally.

Travis builds can be located here
https://travis-ci.org/saurabhpandit/express-ci-boilerplate

Published docker images can be located here
https://hub.docker.com/r/saurabhcpandit/express-ci-boilerplate/tags

To lint .travis.yml
```
docker run -v $(pwd):/project --rm skandyla/travis-cli lint .travis.yml
```

## Build & Run docker image locally
To build docker image
```
docker build -t express-ci-boilerplate --build-arg SHA=$(git rev-parse --short HEAD) .
```

To run docker image
```
docker run -p 8080:8080 -t -i express-ci-boilerplate
```

# Limitations
1. Authentication mechanism has not been implemented
2. Logging has not been implemented
3. Use process managers has not been considered
4. eslint has not been configured for this repo