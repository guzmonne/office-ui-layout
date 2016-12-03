import React from 'react';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header"></div>        
        <div className="body">
          <div className="content"></div>
          <div className="sidebar"></div>      
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;