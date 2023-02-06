import { TaskApp, Calculator, SearchTree } from "./containers";
import { DivEnclouser } from "./components";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="AppContainer">
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
  );
}

export default App;
