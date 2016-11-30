import React, { Component } from 'react'
import {Fabric} from 'office-ui-fabric-react/lib/Fabric'
import {Button, ButtonType} from 'office-ui-fabric-react/lib/Button'
import {Dialog, DialogType, DialogFooter} from 'office-ui-fabric-react/lib/Dialog'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
  }

  open = () => this.setState({isOpen: true})

  close = () => this.setState({isOpen: false})

  render() {
    return (
      <Fabric className="App">
        <div style={{margin: '5em'}}>
          <Button onClick={this.open}>I am a button.</Button>
        </div>
        <Dialog
          isOpen={this.state.isOpen}
          type={DialogType.close}
          onDismiss={this.close.bind(this)}
          title='Dialog title'
          subText='Dialog subText'
          isBlocking={false}
          closeButtonAriaLabel='Close'
        >
          <h1>Hello, World!</h1>
          <DialogFooter>
            <Button buttonType={ButtonType.primary} onClick={this.close}>OK</Button>
          </DialogFooter>
        </Dialog>
      </Fabric>  
    )
  }
}

export default App;
