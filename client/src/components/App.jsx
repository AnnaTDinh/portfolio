import React, { lazy, Suspense } from "react";
//pages
import MainPage from "./pages/MainPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Resume from "./pages/Resume.jsx";
import Projects from "./pages/Projects.jsx";
import TechnicalSkills from "./pages/TechnicalSkills.jsx";
import Contact from "./pages/Contact.jsx";
import AboutMe from "./pages/AboutMe.jsx";

import "../../dist/styles.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="Portfolio">
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/about" component={AboutMe} />
            <Route path="/404" component={PageNotFound} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/technical" component={TechnicalSkills} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
