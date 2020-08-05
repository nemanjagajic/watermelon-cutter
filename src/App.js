import React from 'react'
import './styles/App.css'
import Header from './Header'
import Product from './Product'
import Characteristics from './Characteristics'

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
