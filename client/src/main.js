import Animal from "./componente/animal.js";
import Propriedade from "./componente/propriedade.js";
import Proprietario from "./componente/proprietario.js";

const RootContainer = () => {
  return (
    <React.Fragment>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <Animal/>
      <Propriedade/>
      <Proprietario/>
    </React.Fragment>
  );
}

// React.createElement("h1", null, "iapar")

const container = document.getElementById("container");
ReactDOM.render(<RootContainer/>, container);
