import { TaskApp, Calculator, SearchTree } from "./containers";
import "./App.css";


function App(): JSX.Element {

  return (
    <div className="AppContainer">
      <TaskApp></TaskApp>
      <Calculator></Calculator>
      <SearchTree></SearchTree>
    </div>
  );
}

export default App;
