const sql_scripts = require("./sql-scripts.js");

module.exports = (db, init) => {
  if(init) db.exec(sql_scripts.initial);

  const all_propriedade = db.prepare("SELECT * FROM propriedade;");
  const propriedade_by_id = db.prepare("SELECT * FROM propriedade WHERE id = ?;");

  const all_proprietario = db.prepare("SELECT * FROM proprietario;");
  const proprietario_by_id = db.prepare("SELECT * FROM proprietario WHERE id = ?;");

  return {
    select_all_propriedade: all_propriedade,
    select_propriedade_by_id: propriedade_by_id,

    select_all_proprietario: all_proprietario,
    select_proprietario_by_id: proprietario_by_id,

    // maybe...
    database: db,
    sql_scripts: sql_scripts
  };
};
