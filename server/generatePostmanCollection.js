const fs = require('fs');
const { Collection } = require('postman-collection');
const listEndpoints = require('express-list-endpoints');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Importar rotas do servidor
const voteController = require('./src/controllers/voteController');
//const voteService = require('./server/src/services/voteService');

// Definir as rotas do servidor
app.post('/vote', voteController.receiveVote);
app.get('/count', voteController.countVotes);

// Listar todas as rotas do servidor
const endpoints = listEndpoints(app);

// Definir a URL base
const baseUrl = process.env.SERVER_URL || 'http://localhost:3000';

// Criar a coleção do Postman
const collection = new Collection({
  info: {
    name: 'Election API Collection',
    description: 'Collection for Election API',
  },
  item: endpoints.map(endpoint => ({
    name: endpoint.path,
    request: {
      method: endpoint.methods[0],
      url: `${baseUrl}${endpoint.path}`,
      ...(endpoint.methods[0] === 'POST'
        ? {
            header: [
              {
                key: 'Content-Type',
                value: 'application/json',
              },
            ],
            body: {
              mode: 'raw',
              raw: JSON.stringify({
                name: '<candidate_name>',
                votes: '<number_of_votes>',
              }),
            },
          }
        : {}),
    },
  })),
});

// Exportar a coleção para um arquivo JSON
fs.writeFileSync(
  'election.postman_collection.json',
  JSON.stringify(collection.toJSON(), null, 2)
);

console.log('Postman collection generated successfully!');
