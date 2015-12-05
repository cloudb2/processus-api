# Processus API

An API for [Processus](https://github.com/cloudb2/processus)

## Installation

### NPM

Install using npm within your project
```
npm install --save processus-api
cd ./node_modules/processus-api
npm start
```

### GitHub

or clone this repo
```
git clone https://github.com/cloudb2/processus-api
cd processus-api
npm install
npm start
```

### Docker
```
docker pull cloudb2/processus
docker run -d -p 10010:10010 cloudb2/processus
```

## Using the API

The default port (in all installation cases) is 10010, set the environment variable PORT to change this (for docker use the -e accordingly).

