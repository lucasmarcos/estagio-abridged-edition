const Usuarios = () => {
  const [listaDeUsuarios, setListaDeUsuarios] = React.useState([]);
  const [usuarioSelecionado, setUsuarioSelecionado] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/usuarios")
    .then(res => res.json())
    .then(json => setListaDeUsuarios(json))
  }, []);

  if(usuarioSelecionado !== null) {
    return <Usuario id={usuarioSelecionado} voltar={() => setUsuarioSelecionado(null)}/>
  } else {
    return <ListaDeUsuarios usuarios={listaDeUsuarios} selecionarUsuario={(id) => setUsuarioSelecionado(id)}/>
  }
};

const ListaDeUsuarios = ({usuarios, selecionarUsuario}) =>
  (<div>
    <h1>Usuários</h1>
    <table>
      <thead>
        <tr>
          <td>Nome</td>
          <td>CPF</td>
          <td>Cidade</td>
          <td>Bairro</td>
          <td>Número</td>
          <td>CEP</td>
          <td>Telefone</td>
          <td>e-mail</td>
        </tr>
      </thead>
      <tbody>
        {usuarios.map(usuario =>
          <tr key={usuario.id} onClick={() => selecionarUsuario(usuario.id)}>
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

    <button>adicionar</button>
  </div>);

const Usuario = ({id, voltar}) =>
  (<div>
    <h1>Usuário #{id}</h1>
    <button>remover</button>
    <button onClick={() => voltar()}>voltar</button>
  </div>);

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

const Componente = () =>
  (<div>
      <Usuarios/>
      <Tecnicos/>
      <Propriedades/>
      <Animais/>
  </div>);

const container = document.getElementById("container");
ReactDOM.render(<Componente/>, container);
