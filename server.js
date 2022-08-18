const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

const db = {
  garage: [
      {
          "name": "Tesla",
          "color": "#e6e6fa",
          "id": 1,
      },
      {
          "name": "BMW",
          "color": "#fede00",
          "id": 2,
      },
      {
          "name": "Mersedes",
          "color": "#6c779f",
          "id": 3,
      },
      {
          "name": "Ford",
          "color": "#ef3c40",
          "id": 4,
      },
  ],
  winners: [
      {
          id: 1,
          wins: 1,
          time: 10,
      }
  ]
};

const router = jsonServer.router(db);

server.use(middlewares);
server.use(router);

server.listen(port);