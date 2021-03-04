const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");

const start = () => {
  const server = http.createServer(app);
  server.listen(process.env.PORT || 8000, () => {
    console.log("Server is listening");
  });
};

start();
