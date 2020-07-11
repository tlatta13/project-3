import React, {useState} from 'react'

const Stocks = props => {
    const {count, setCount} = props
    if (count >= props.tickerInfo.marketSummaryResponse.result.length-1) {
      setCount(0)
    }
    else setCount(curr => curr + 1)
    const stock = props.tickerInfo.marketSummaryResponse.result[count]
    return (<>
      {stock.symbol}
      {
        Math.sign(stock.regularMarketChangePercent.raw) === 1 ? (
          <span className="text-success mr-3"> {stock.regularMarketChangePercent.fmt} </span>
        ) :
          (
            Math.sign(stock.regularMarketChangePercent.raw) === -1 ? (
              <span className="text-danger  mr-3"> {stock.regularMarketChangePercent.fmt} </span>
            ) : (
                <span className="text-danger  mr-3"> {stock.regularMarketChangePercent.fmt} </span>
              ))
      }

    </>)
    
  }

  export default Stocks
