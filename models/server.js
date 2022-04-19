const express = require("express"),
         cors = require("cors"),
   { DB_CNN } = require("../db/config");

class Server {
  constructor() {
    this.app  = express();
    this.port = process.env.PORT;

    //  PATHS
    this.clientPath = "/api/client";

    //  DB CONNECTION
    this.dbConnection();

    //  MIDDLEWARES
    this.middlewares();

    //  ROUTES
    this.routes();

  }

  async dbConnection() {
    await DB_CNN();
  }

  middlewares() {
    //  CORS
    this.app.use(cors());

    //  BODY PARSER
    this.app.use(express.json());

    //  PUBLIC DIRECTORY
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.clientPath, require("../routes/client"));
  }

  listen() {
    this.app.listen(this.port, () => console.log("Server's listening on port", this.port));
  }
}


module.exports = Server;