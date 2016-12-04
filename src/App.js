import React from 'react';
import {Fabric} from 'office-ui-fabric-react/lib/Fabric'
import NavBar from './components/NavBar.js'
import SidebarMenu from './components/SidebarMenu.js'
import Content from './components/Content.js'
import Footer from './components/Footer.js'

class App extends React.Component {
  render() {
    return (
      <Fabric className="App">
        <div className="header">
          <NavBar />
        </div>        
        <div className="body">
          <div className="content">
            <Content />
          </div>
          <div className="sidebar">
            <SidebarMenu />
          </div>      
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Fabric>
    );
  }
}

export default App;