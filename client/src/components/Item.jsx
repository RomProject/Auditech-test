import React from 'react'
import {useState} from 'react'
import Button from '@material-ui/core/Button'

export default function Item({marketName,price,symb}) {
    const [marketdata, setmarketdata] = useState([])
    const [modal, setmodal] = useState(false)
    
    const toggleModal =()=>{
        setmodal(!modal)
    }

    const marketInfo = async()=>{
        try {
         const res = await fetch(encodeURI(`https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${symb}`),{
            method:'get',
            headers:{'X-API-KEY': 'HHyNm3dsQG7SBl9QS8GkQ20kHUzUJsiI7pphccuT','accept': 'application/json'}

      })    
      const data = await res.json()
      const info = data['quoteResponse'].result
      console.log(info[0]);
      setmarketdata(info[0])
             
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div className="items">
          <h2 id="name">{marketName}</h2>
          <h3>{price}</h3>
          <Button onClick={()=>{marketInfo();toggleModal()}}  variant="contained" 
         color="primary">market's info</Button>
            {modal &&(
                <div className="modal">
                    <div onClick={toggleModal} className="overlay">
                    <div className="modal-content">
                        <h1>{marketdata.currency}</h1>
                        <h2>TimeZone: {marketdata.exchangeTimezoneName}</h2>
                        <p>Symbol: {marketdata.symbol}</p>
                        <p>Market: {marketdata.market}</p>
                        <h4>High :{marketdata.regularMarketDayHigh}</h4>
                        <h4>Low :{marketdata.regularMarketDayLow}</h4>
                       
                        <button onClick={toggleModal} className="close-modal">Close</button>
                    </div>

                    </div>

                </div>

            )}
        </div>
    )
    
}
