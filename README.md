# Election API

A Node.js project implementing a simple election system using microservices, Docker, and Express. This project includes a client for submitting votes and a server for counting and displaying votes.

## Features

- **Submit Votes:** Clients (voting machines) can submit votes for candidates.
- **Count Votes:** Server counts and displays the current vote tally every 5 seconds.

## Estrutucture

Election-API/
├── client/
│ └── src/
│ └── index.js
│ └── Dockerfile
│ └── package.json
├── server/
│ └── src/
│ ├── controllers/
│ │ └── voteController.js
│ ├── models/
│ │ └── vote.js
│ ├── repositories/
│ │ └── voteRepository.js
│ ├── services/
│ │ └── voteService.js
│ ├── views/
│ │ └── voteView.js
│ └── app.js
│ └── Dockerfile
│ └── generatePostmanCollection.js
│ └── package.json
├── docker-compose.yml
└── README.md

## Requirements

- Docker
- Docker Compose

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/myproject-api.git
   cd myproject-api
   ```

## Gerar Coleção do Postman

Para gerar a coleção do Postman, execute o seguinte comando:

```sh
npm run generate:postman-collection
```

2. install dependencies for client and server

3. Iniciar o projeto no docker

```sh
    docker-compose up --build
```

4. Iniciar o projeto fora do docker, rode o comando na pasta client e servr

```sh
    npm start
```
