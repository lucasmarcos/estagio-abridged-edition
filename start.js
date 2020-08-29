const express = require("express");
const app = express();

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("db/db.db");

const fs = require("fs");
fs.readFile("db/schema.sql", "utf-8", (error, schema) => {
  db.exec(schema);
  if(error) console.log(error);
});

((app) => {
  const lista_de_usuarios = [
    { "id": "0", "nome": "usuario_0" },
    { "id": "1", "nome": "usuario_1" },
    { "id": "2", "nome": "usuario_2" }
  ];

  app.get("/api/usuarios", (_, res) => {
    res.json(lista_de_usuarios);
  });

  app.get("/api/usuario/:id", (req, res) => {
    const id = req.params.id;
    res.json(lista_de_usuarios[id]);
  });
})(app);

((app) => {
  const lista_de_tecnicos = [
    { "id": "0", "nome": "tecnico_0" },
    { "id": "1", "nome": "tecnico_1" },
    { "id": "2", "nome": "tecnico_2" }
  ];

  app.get("/api/tecnicos", (_, res) => {
    res.json(lista_de_tecnicos);
  });

  app.get("/api/usuario/:id", (req, res) => {
    const id = req.params.id;
    res.json(lista_de_tecnicos[id]);
  });
})(app);

((app) => {
  const lista_de_propriedades = [
    { "id": "0", "nome": "propriedade_0" },
    { "id": "1", "nome": "propriedade_1" },
    { "id": "2", "nome": "propriedade_2" }
  ];

  app.get("/api/propriedades", (_, res) => {
    res.json(lista_de_propriedades);
  });

  app.get("/api/propriedade/:id", (req, res) => {
    const id = req.params.id;
    res.json(lista_de_propriedades[id]);
  });
})(app);

((app) => {
  const lista_de_animais = [
    { "id": "0", "nome": "animal_0" },
    { "id": "1", "nome": "animal_1" },
    { "id": "2", "nome": "animal_2" }
  ];

  app.get("/api/animais", (_, res) => {
    res.json(lista_de_animais);
  });

  app.get("/api/animal/:id", (req, res) => {
    const id = req.params.id;
    res.json(lista_de_animais[id]);
  });
})(app);

app.use("/", express.static("client/www"));

const port = "3030";
app.listen(port, () => {
  console.log(`ouvindo em 127.0.0.1:${port}`);
});
