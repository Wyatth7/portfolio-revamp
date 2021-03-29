import "./styles/css/styles.css";

import { Switch, Route } from "react-router";

// COMPONENTS
import Nav from "./components/Nav/Nav";
import Home from "./components/pages/Home/Home";
import Portfolio from "./components/pages/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="pages">
        <Switch>
          <Route path="/projects" component={Portfolio} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
