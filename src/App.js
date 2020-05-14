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

  onMouseMove = event => {
    const val1 = -event.clientX / event.clientY * 2;
    const val2 = event.clientX / event.clientY * 2;
    this.setState({
      styleOne: { transform: `skewY(${val1}deg)` },
      styleTwo: { transform: `skewY(${val2}deg)` },
    });
  }

  render() {
    const { styleOne, styleTwo } = this.state;
    return (
      <div onMouseMove={this.onMouseMove}>
        <div className="panel" style={styleOne} />
        <div className="panel" style={styleTwo} />
      </div>
    );
  }
}

export default App;
