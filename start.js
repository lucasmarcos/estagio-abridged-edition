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
  const lista_de_usuarios = [...Array(10).keys()].map(id => ({
    "id": id,
    "nome": `usuario_${id}`,
    "cpf": `cpf_${id}`,
    "cidade": `cidade_${id}`,
    "bairro": `bairro_${id}`,
    "numero": `numero_${id}`,
    "cep": `cep_${id}`,
    "telefone": `telefone_${id}`,
    "email": `email_${id}`,
    "tipo": `tipo_${id}`,
    "verificado": ((id % 3) == 0)
  }));

  app.get("/api/usuarios", (_, res) => {
    const lista = lista_de_usuarios.map(usuario => ({
      "id": usuario.id,
      "nome": usuario.nome,
      "cpf": usuario.cpf,
      "email": usuario.email
    }));
    res.json(lista);
  });

  app.get("/api/usuario/:id", (req, res) => {
    res.json(lista_de_usuarios[req.params.id]);
  });
})(app);

((app) => {
  const lista_de_tecnicos = [...Array(10).keys()].map(id => ({
    "id": id,
    "ano_formatura": id,
    "tipo": `tipo_tec_${id}`,
    "registro_profissional": `registro_profissional_${id}`
  }));

  app.get("/api/tecnicos", (_, res) => {
    res.json(lista_de_tecnicos);
  });

  app.get("/api/tecnico/:id", (req, res) => {
    const id = req.params.id;
    res.json(lista_de_tecnicos[id]);
  });
})(app);

((app) => {
  const lista_de_propriedades = [...Array(10).keys()].map(id => ({
    "id": id,
    "proprietario": id,
    "nome": `nome_${id}`,
    "longitude": id,
    "latitude": id,
    "data_inicio": id,
    "data_proxima": id
  }));

  app.get("/api/propriedades", (_, res) => {
    res.json(lista_de_propriedades);
  });

  app.get("/api/propriedade/:id", (req, res) => {
    const id = req.params.id;
    res.json(lista_de_propriedades[id]);
  });
})(app);

((app) => {
  const lista_de_animais = [...Array(10).keys()].map(id => ({
    "id": id,
    "propriedade": id,
    "identificacao": `identificacao_${id}`,
    "sexo": (id % 2 === 0) ? "f" : "m",
    "peso": id * 45.1,
    "status": `raca_${id}`,
    "status": `identificacao_${id}`
  }));

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
