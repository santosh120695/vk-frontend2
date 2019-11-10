import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

const vibrate = (time) => {
    window.navigator.vibrate(time)
}
class QrScanner extends Component {
    state = {
      result: 'No result'
    }
   
    handleScan = data => {
      if (data) {
        this.setState({
          result: data
        })
          vibrate(500)
      }
    }
    handleError = err => {
      console.error(err)
    }
    render() {
      return (
        <div>
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
          />
          <p>{this.state.result}</p>
        </div>
      )
    }
  }

  export default QrScanner