const select_animal_by_id = (stmnt, id) => {
  const animal = stmnt.get(id);
  if (animal == null) return {};
  return animal;
};

const select_all_animal = (stmnt) => {
  return stmnt.all();
};

const insert_new_animal = (stmnt, new_id, animal) => {
  stmnt.run(
    animal.identificacao,
    animal.peso,
    animal.sexo,
    animal.propriedade
  );

  const id = new_id.get()["last_insert_rowid()"];
  return id;
};

const delete_animal_by_id = (stmnt, id) => {
  stmnt.run(id);
  return true;
};

module.exports = (connection) => {
  const database = connection.database;
  const sql_scripts = connection.sql_scripts;

  const select_by_id = database.prepare(sql_scripts.SELECT_ANIMAL_WHERE_ID);
  const every_animal = database.prepare(sql_scripts.SELECT_EVERY_ANIMAL);
  const insert_into = database.prepare(sql_scripts.INSERT_ANIMAL);
  const delete_by_id = database.prepare(sql_scripts.DELETE_ANIMAL_WHERE_ID);

  const new_id = database.prepare("SELECT last_insert_rowid();");

  return {
    byid: (id) => select_animal_by_id(select_by_id, id),
    all: () => select_all_animal(every_animal),
    new: (animal) => insert_new_animal(insert_into, new_id, animal),
    delete: (id) => delete_animal_by_id(delete_by_id, id)
  };
};
