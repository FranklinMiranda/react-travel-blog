import React from 'react';
import Nav from './Nav';
import Article from './Article'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Article />
      </div>
    );
  }
}

export default App;
