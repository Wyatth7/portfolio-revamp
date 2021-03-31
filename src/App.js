import "./styles/css/styles.css";

import { useState } from "react";
import { Switch, Route, Redirect } from "react-router";

// COMPONENTS
import Nav from "./components/Nav/Nav";
import Home from "./components/pages/Home/Home";
import Blog from "./components/pages/Blog/Blog";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/hoc/ScrollToTop/ScrollToTop";
import BlogPost from "./components/pages/Blog/BlogPost/BlogPost";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Nav themeChange={toDarkMode} isDark={darkMode} />
      <div className="pages">
        <ScrollToTop />
        <Switch>
          <Route path="/projects" component={Portfolio} />
          <Route path="/blog/:id" component={BlogPost} />
          <Route path="/blog" component={Blog} />
          <Route exact path="/" component={Home} />
          <Redirect from="/*" to="/" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
