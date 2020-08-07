import React from 'react';
import Nav from './Nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="main">
        Main
        <Nav/>
      </div>
    )
  }
}

export default App;