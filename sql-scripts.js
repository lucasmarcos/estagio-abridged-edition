const DROP_ALL =
  ["animal", "propriedade", "proprietario"]
  .map(s => `DROP TABLE IF EXISTS ${s};`)
  .join(" ");

const CREATE_TABLE_PROPRIETARIO = `
  CREATE TABLE IF NOT EXISTS proprietario (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    cnpj TEXT NOT NULL
  );
`;

const CREATE_TABLE_PROPRIEDADE = `
  CREATE TABLE IF NOT EXISTS propriedade (
    id INTEGER PRIMARY KEY,
    area REAL NOT NULL,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL,
    proprietario INTEGER NOT NULL,
    FOREIGN KEY (proprietario) REFERENCES proprietario(id)
  );
`;

const CREATE_TABLE_ANIMAL = `
  CREATE TABLE IF NOT EXISTS animal (
    id INTEGER PRIMARY KEY,
    identificacao TEXT,
    peso REAL NOT NULL,
    sexo TEXT NOT NULL,
    propriedade INTEGER NOT NULL,
    FOREIGN KEY (propriedade) REFERENCES propriedade(id)
  );
`;

const EXEMPLE_DATA = `
  INSERT INTO
    proprietario (id, nome, cnpj)
  VALUES
    (0, 'Caroline Polachek', '00.000.000/0000-00'),
    (1, 'A.G. Cook', '11.111.111/1111-11'),
    (2, 'The Blessed Madonna', '22.222.222/2222-22');

  INSERT INTO
    propriedade (id, area, latitude, longitude, proprietario)
  VALUES
    (0, 100.00, -1, 1, 0),
    (1, 2424.24, -50.50, -1000.0, 1),
    (2, 3.14, 15000.0, 15000.0, 2);

  INSERT INTO
    animal (id, peso, sexo, propriedade)
  VALUES
    (0, 2000.0, 'F', 0),
    (1, 1000.0, 'M', 1),
    (2, 120.0, 'F', 2);
`;

exports.initial = `
  ${DROP_ALL}

  ${CREATE_TABLE_PROPRIETARIO}
  ${CREATE_TABLE_PROPRIEDADE}
  ${CREATE_TABLE_ANIMAL}

  ${EXEMPLE_DATA}
`;
