import React from 'react';
import ProductDetail from './ProductDetail.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      something: []
    }
  }


  render() {
    return (
    <div className="main">
      <header className="nav">Header for Navigation Bar
      </header>
      <ProductDetail className="productOverview"/>
    </div>
    )
  }


};

export default App;