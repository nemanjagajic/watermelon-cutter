import React, {useState} from 'react'
import './styles/App.css'
import Header from './components/Header'
import Product from './containers/Product'
import Characteristics from './containers/Characteristics'
import Order from './containers/Order'

function App() {
  const [numberOfItems, setNumberOfItems] = useState(1)

  return (
    <div className='App'>
      <div className='productPage'>
        <Header />
        <Product numberOfItems={numberOfItems} setNumberOfItems={setNumberOfItems} />
      </div>
      <Characteristics />
      <Order numberOfItems={numberOfItems} setNumberOfItems={setNumberOfItems} />
    </div>
  );
}

export default App
