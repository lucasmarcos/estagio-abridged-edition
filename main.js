const fastify = require("fastify")({ logger: true });

const db = require("better-sqlite3")("db.db", { verbose: console.log });

const connection = require("./con.js")(db, init = false);

const path = require("path");
const fastify_static = require("fastify-static");

fastify.register(fastify_static, {
  root: path.join(__dirname, "/client/www/"),
  prefix: "/"
});

const animal_controller = require("./animal-test-controller.js")(connection);
require("./routes.js")(fastify, connection, animal_controller);

(async () => {
  await fastify.listen(3030);
})();
