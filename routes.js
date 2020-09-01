const routes_animal = (f, all, byid) => {
  f.get("/api/animais", async (req, res) => {
    const animais = all.all();
    return animais;
  });

  f.get("/api/animal/:id", async(req, res) => {
    const id = req.params.id;
    const animal = byid.get(id);
    return animal;
  });
};

const routes_propriedade = (f, all, byid) => {
  f.get("/api/propriedades", async (req, res) => {
    const propriedades = all.all();
    return propriedades;
  });

  f.get("/api/propriedade/:id", async(req, res) => {
    const id = req.params.id;
    const propriedade = byid.get(id)
    return propriedade;
  });
};

const routes_proprietario = (f, all, byid) => {
  f.get("/api/proprietarios", async (req, res) => {
    const proprietarios = all.all();
    return proprietarios;
  })

  f.get("/api/proprietario/:id", async(req, res) => {
    const id = req.params.id;
    const propriedade = byid.get(id);
    return propriedade;
  });
};

module.exports = (fastify, db_connection) => {
  routes_animal(fastify,
    db_connection.select_all_animal,
    db_connection.select_animal_by_id);

  routes_propriedade(fastify,
    db_connection.select_all_propriedade,
    db_connection.select_propriedade_by_id);

  routes_proprietario(fastify,
    db_connection.select_all_proprietario,
    db_connection.select_proprietario_by_id);

  return true;
};
