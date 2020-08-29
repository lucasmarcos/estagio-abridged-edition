const Usuarios = () => {
  const [listaDeUsuarios, setListaDeUsuarios] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/usuarios")
    .then(res => res.json())
    .then(json => setListaDeUsuarios(json))
    .catch(err => console.log(err));
  });

  return (
    <div>

    <h1>usuários</h1>

    <table>
      <tbody>
        {listaDeUsuarios.map(usuario =>
          <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>{usuario.nome}</td>
          </tr>
        )}
      </tbody>
    </table>

    </div>
  );
};

const Tecnicos = () => {
  const [listaDeTecnicos, setListaDeTecnicos] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/tecnicos")
    .then(res => res.json())
    .then(json => setListaDeTecnicos(json))
    .catch(err => console.log(err));
  });

  return (
    <div>

    <h1>técnicos</h1>

    <table>
      <tbody>
        {listaDeTecnicos.map(tecnico =>
          <tr key={tecnico.id}>
            <td>{tecnico.id}</td>
            <td>{tecnico.nome}</td>
          </tr>
        )}
      </tbody>
    </table>

    </div>
  );
};

const Propriedades = () => {
  const [listaDePropriedades, setlistaDePropriedades] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/propriedades")
    .then(res => res.json())
    .then(json => setlistaDePropriedades(json))
    .catch(err => console.log(err));
  });

  return (
    <div>

    <h1>propriedades</h1>

    <table>
      <tbody>
        {listaDePropriedades.map(Propriedade =>
          <tr key={Propriedade.id}>
            <td>{Propriedade.id}</td>
            <td>{Propriedade.nome}</td>
          </tr>
        )}
      </tbody>
    </table>

    </div>
  );
};

const Animais = () => {
  const [listaDeAnimais, setlistaDeAnimais] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/animais")
    .then(res => res.json())
    .then(json => setlistaDeAnimais(json))
    .catch(err => console.log(err));
  });

  return (
    <div>

    <h1>animais</h1>

    <table>
      <tbody>
        {listaDeAnimais.map(animal =>
          <tr key={animal.id}>
            <td>{animal.id}</td>
            <td>{animal.nome}</td>
          </tr>
        )}
      </tbody>
    </table>

    </div>
  );
};

const Componente = () => {
  return (
    <div>
      <Usuarios/>
      <Tecnicos/>
      <Propriedades/>
      <Animais/>
    </div>
 );
};

const container = document.getElementById("container");
ReactDOM.render(<Componente/>, container);
