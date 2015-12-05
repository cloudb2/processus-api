# Processus API

An API for [Processus](https://github.com/cloudb2/processus)

[![Node version](https://img.shields.io/badge/node-v5.0.0-green.svg)](https://nodejs.org/en/)
[![NPM version](https://img.shields.io/npm/v/processus-api.svg?style=flat-square)](https://www.npmjs.com/package/processus)
[![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/cloudb2/processus/blob/master/LICENSE)

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

