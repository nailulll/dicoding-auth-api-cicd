require("dotenv").config();
const createServer = require("./Infrastructures/http/createServer");
const container = require("./Infrastructures/container");

const start = async () => {
  const server = await createServer(container);
  await server.start();
  // test ci/cd 1
  // test ci/cd 2
  console.log(`server start at ${server.info.uri}`);
};

start();
