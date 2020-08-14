import React from 'react';

//pages
import MainPage from './pages/MainPage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Resume from './pages/Resume.jsx';
import Projects from './pages/Projects.jsx';
import TechnicalSkills from './pages/TechnicalSkills.jsx';
import Contact from './pages/Contact.jsx';

import "../../dist/styles.css";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
           <Route exact path="/" component={MainPage}/>
            <Route path="/404" component={PageNotFound}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/technical" component={TechnicalSkills}/>
            <Route exact path="/contact" component={Contact}/>
            <Redirect to="/404"/>
          </Switch>
        </Router>
      </div>
      // <div className="Main">
      //   Main
      //   <Nav/>
      // </div>
    )
  }
}

export default App;