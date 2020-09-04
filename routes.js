const routes_animal = (f, animal_controller) => {
  f.get("/api/animais", async () => {
    const animais = animal_controller.all();
    return animais;
  });

  f.get("/api/animal/:id", async(req) => {
    const id = req.params.id;
    const animal = animal_controller.byid(id);
    return animal;
  });

  f.post("/api/animal", async (req) => {
    const new_id = animal_controller.new(req.body);
    const animal = animal_controller.byid(new_id);
    return animal;
  });

  f.delete("/api/animal/:id", async (req) => {
    const id = req.params.id;
    animal_controller.delete(id);
    return id;
  });
};

const routes_propriedade = (f, all, byid) => {
  f.get("/api/propriedades", async () => {
    const propriedades = all.all();
    return propriedades;
  });

  f.get("/api/propriedade/:id", async (req) => {
    const id = req.params.id;
    const propriedade = byid.get(id)
    return propriedade;
  });
};

const routes_proprietario = (f, all, byid) => {
  f.get("/api/proprietarios", async () => {
    const proprietarios = all.all();
    return proprietarios;
  })

  f.get("/api/proprietario/:id", async(req) => {
    const id = req.params.id;
    const propriedade = byid.get(id);
    return propriedade;
  });
};

module.exports = (fastify, db_connection, animal_controller) => {
  routes_animal(fastify, animal_controller);

  routes_propriedade(fastify,
    db_connection.select_all_propriedade,
    db_connection.select_propriedade_by_id);

  routes_proprietario(fastify,
    db_connection.select_all_proprietario,
    db_connection.select_proprietario_by_id);

  return true;
};
