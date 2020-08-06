import React from 'react'
import './styles/App.css'
import Header from './components/Header'
import Product from './containers/Product'
import Characteristics from './containers/Characteristics'

function App() {
  return (
    <div className='App'>
      <div className='productPage'>
        <Header />
        <Product />
      </div>
      <Characteristics />
    </div>
  );
}

export default App
