import { TaskApp, Calculator, SearchTree } from "./components";
import { DivEnclouser } from "./containers";
import hojas from "./assets/img/hojas.jpg";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="BackgroundImage">
      <div className="AppContainer">
        <h1>Testing git in gitHub</h1>
        <div className="first childs">
          <DivEnclouser>
            <TaskApp></TaskApp>
          </DivEnclouser>
        </div>
        <div className="second childs">
          <DivEnclouser>
            <Calculator></Calculator>
          </DivEnclouser>
        </div>
        <div className="third childs">
          <DivEnclouser>
            <SearchTree></SearchTree>
          </DivEnclouser>
        </div>
      </div>
    </div>
  );
}

export default App;
