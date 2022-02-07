import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./component/Home";

function App() {
  return (
    <Switch>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  );
}

export default App;
