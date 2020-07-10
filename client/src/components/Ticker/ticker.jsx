import React, { useEffect, useState } from 'react';
import Ticker from 'react-ticker';
//import API from '../../lib/API';
import dummyAPI from './practice.json'
import Stocks from '../Stocks'
const style = {
  'fontFamily': 'Arial, Helvetica, sans-serif'
}


const TickerComponent= () => {
  const [tickerInfo, setTickerInfo] = useState([])
  const [count, setCount] = useState(0)
  useEffect(() => {
    // API.Stock.get()
    // .then(({data})=>{
    const data = dummyAPI
    console.log(data)
    setTickerInfo(data)
    //}
  }, [])

  

  return (
    <div style={style}>
      <Ticker offset="run-in" speed={10} >
        {({ index }) => <Stocks tickerInfo={tickerInfo} count={count} setCount={setCount} />}
      </Ticker>
    </div>
  )
}

export default TickerComponent;