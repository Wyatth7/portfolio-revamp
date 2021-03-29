import "./styles/css/styles.css";

import { Switch, Route } from "react-router";

// COMPONENTS
import Nav from "./components/Nav/Nav";
import Home from "./components/pages/Home/Home";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/hoc/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="pages">
        <ScrollToTop />
        <Switch>
          <Route path="/projects" component={Portfolio} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
