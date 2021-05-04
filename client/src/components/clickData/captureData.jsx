import React from 'react';

const captureData = (WrappedComponent) => {
  class CaptureData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        storage: []
      }
      this.clickHandle = this.clickHandle.bind(this);
    }
    clickHandle(e) {
      e.preventDefault();
      this.setState({
        storage: this.state.storage.concat([
          {
            element: e.target,
            time: new Date(),
            module: e.target.value
          }
        ])
      })
    }
    render() {
      return (
        <WrappedComponent
          captureData={this.clickHandle}
          dataStorage={this.state.storage} />
      )
    }
  }
  return CaptureData;
}
export default captureData;
// Element of the page which was clicked
// Time of click
// Module clicked