const Usuarios = () => {
  const [listaDeUsuarios, setListaDeUsuarios] = React.useState([]);
  const [usuarioSelecionado, setUsuarioSelecionado] = React.useState(null);
  const [adicionarUsuario, setAdicionarUsuario] = React.useState(false);

  React.useEffect(() => {
    fetch("/api/usuarios")
      .then(res => res.json())
      .then(json => setListaDeUsuarios(json))
  }, []);

  if(usuarioSelecionado !== null) {
    return (<Usuario id={usuarioSelecionado} voltar={() => setUsuarioSelecionado(null)}/>)
  } else if(adicionarUsuario) {
    return (<AdicionarUsuario voltar={() => setAdicionarUsuario(false)}/>)
  } else {
    return (<ListaDeUsuarios usuarios={listaDeUsuarios} selecionarUsuario={(id) => setUsuarioSelecionado(id)} adicionarUsuario={() => setAdicionarUsuario(true)}/>)
  }
};

const ListaDeUsuarios = ({usuarios, selecionarUsuario, adicionarUsuario}) =>
  (<div>
    <div className="h2">Usuários</div>

    <table className="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>e-mail</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map(usuario =>
        <tr key={usuario.id} onClick={() => selecionarUsuario(usuario.id)}>
          <td>{usuario.nome}</td>
          <td>{usuario.cpf}</td>
          <td>{usuario.email}</td>
        </tr>
        )}
      </tbody>
    </table>

    <div>
      <button className="btn" onClick={() => adicionarUsuario()}>adicionar</button>
    </div>

  </div>);

const Usuario = ({id, voltar}) => {
  const [usuario, setUsuario] = React.useState({});

  React.useEffect(() => {
    fetch(`/api/usuario/${id}`)
      .then(res => res.json())
      .then(json => setUsuario(json))
  }, []);

  return (
    <div>
      <h1>Usuário #{usuario.id}</h1>
      <h2>Nome: {usuario.nome}</h2>
      <h3>Telefone: {usuario.telefone}</h3>
      <h3>e-mail: {usuario.email}</h3>
      <h3>CPF: {usuario.cpf}</h3>
      <h3>Tipo: {usuario.tipo}</h3>

      <br></br>
      <h2>Endereço</h2>
      <h3>Bairro: {usuario.bairro}</h3>
      <h3>Cidade: {usuario.cidade}</h3>
      <h3>Número: {usuario.numero}</h3>
      <h3>CEP: {usuario.cep}</h3>

      {(usuario.verificado)? <h2>Verificado</h2> : <></>}

      <br></br>
      <button>remover</button>
      <button onClick={() => voltar()}>voltar</button>
    </div>
  )};

const AdicionarUsuario = ({voltar}) => {
  const [nome, setNome] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");

  const adicionarUsuario = (event) => {
    event.preventDefault();

    const novoUsuario = {
      "nome": nome,
      "email": email,
      "telefone": telefone,
      "cpf": cpf
    };

    const json = JSON.stringify(novoUsuario);

    fetch("/api/usuario", {
      "method": "POST",
      "data": json
    });

    console.log(`vamos la! ${json}`);
  };

  return (
    <div>
      <form onSubmit={adicionarUsuario} className="from-horizontal">
        <fieldset>
          <div className="form-group">
            <label className="form-label">Nome</label>
            <input className="form-input" value={nome} onChange={(a) => setNome(a.target.value)}></input>
          </div>

          <div className="form-group">
            <label className="form-label">CPF</label>
            <input className="form-input" value={cpf} onChange={(a) => setCpf(a.target.value)}></input>
          </div>

          <div className="form-group">
            <label className="form-label">Telefone</label>
            <input className="form-input" value={telefone} onChange={(a) => setTelefone(a.target.value)}></input>
          </div>

          <div className="form-group">
            <label className="form-label">e-mail</label>
            <input className="form-input" value={email} onChange={(a) => setEmail(a.target.value)}></input>
          </div>

          <div className="input-group">
            <button className="btn">Enviar</button>
            <button className="form-input" className="btn" type="button" onClick={() => voltar()}>Voltar</button>
          </div>
        </fieldset>
      </form>
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

const Componente = () =>
  (<div>
    <Usuarios/>
    <Tecnicos/>
    <Propriedades/>
    <Animais/>
  </div>);

const container = document.getElementById("root");
ReactDOM.render(<Componente/>, container);
