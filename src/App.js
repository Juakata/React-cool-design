import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleOne: {},
      styleTwo: {},
    }
  }

  render() {
    return (
      <div>
        Hi
      </div>
    );
  }
}

export default App;
