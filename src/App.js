import React, { useState, useRef } from 'react'
import './styles/App.css'
import Header from './components/Header'
import Product from './containers/Product'
import Characteristics from './containers/Characteristics'
import Order from './containers/Order'

function App() {
  const [numberOfItems, setNumberOfItems] = useState(1)
  const orderRef = useRef(null)
  const characteristicsRef = useRef(null)
  const scrollTo = ref => ref.current.scrollIntoView({behavior: 'smooth'})

  return (
    <div className='App'>
      <div className='productPage'>
        <Header
          orderRef={orderRef}
          characteristicsRef={characteristicsRef}
          scrollTo={scrollTo}
        />
        <Product
          numberOfItems={numberOfItems}
          setNumberOfItems={setNumberOfItems}
          orderRef={orderRef}
          scrollTo={scrollTo}
        />
      </div>
      <Characteristics
        characteristicsRef={characteristicsRef}
      />
      <Order
        numberOfItems={numberOfItems}
        setNumberOfItems={setNumberOfItems}
        orderRef={orderRef}
      />
    </div>
  );
}

export default App
