const Usuarios = () => {
  const [listaDeUsuarios, setListaDeUsuarios] = React.useState([]);

  const select = (id) => {
    const clone = [...listaDeUsuarios];
    clone[id].selected = !clone[id].selected;
    setListaDeUsuarios(clone);
  };

  React.useEffect(() => {
    fetch("/api/usuarios")
    .then(res => res.json())
    .then(json => setListaDeUsuarios(json))
  }, []);

  return (
    <div>

    <h1>usuários</h1>

    <table>
      <thead>
        <tr>
          <td>nome</td>
          <td>cpf</td>
          <td>cidade</td>
          <td>bairro</td>
          <td>numero</td>
          <td>cep</td>
          <td>telefone</td>
          <td>email</td>
        </tr>
      </thead>
      <tbody>
        {listaDeUsuarios.map(usuario =>
          <tr key={usuario.id} className={usuario.selected ? "selected" : ""} onClick={() => select(usuario.id)}>
            <td>{usuario.nome}</td>
            <td>{usuario.cpf}</td>
            <td>{usuario.cidade}</td>
            <td>{usuario.bairro}</td>
            <td>{usuario.numero}</td>
            <td>{usuario.cep}</td>
            <td>{usuario.telefone}</td>
            <td>{usuario.email}</td>
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
  }, []);

  return (
    <div>

    <h1>técnicos</h1>

    <table>
    <thead>
        <tr>
          <td>ano de formatura</td>
          <td>tipo</td>
          <td>registro profissional</td>
        </tr>
      </thead>
      <tbody>
        {listaDeTecnicos.map(tecnico =>
          <tr key={tecnico.id}>
            <td>{tecnico.ano_formatura}</td>
            <td>{tecnico.tipo}</td>
            <td>{tecnico.registro_profissional}</td>
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
  }, []);

  return (
    <div>

    <h1>propriedades</h1>

    <table>
    <thead>
      <tr>
        <td>nome</td>
         <td>longitude</td>
         <td>latitude</td>
         <td>data de inicio</td>
         <td>data da próxima</td>
        </tr>
      </thead>

      <tbody>
        {listaDePropriedades.map(propriedade =>
          <tr key={propriedade.id}>
            <td>{propriedade.nome}</td>
            <td>{propriedade.longitude}</td>
            <td>{propriedade.latitude}</td>
            <td>{propriedade.data_inicio}</td>
            <td>{propriedade.data_proxima}</td>
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
  }, []);

  return (
    <div>

    <h1>animais</h1>

    <table>
    <thead>
        <tr>
          <td>identificação</td>
          <td>sexo</td>
          <td>peso</td>
          <td>status</td>
        </tr>
      </thead>
      <tbody>
        {listaDeAnimais.map(animal =>
          <tr key={animal.id}>
            <td>{animal.identificacao}</td>
            <td>{animal.sexo}</td>
            <td>{animal.peso}</td>
            <td>{animal.status}</td>
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
