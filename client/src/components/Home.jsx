import React from 'react'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import Item from './Item'


export default function Home() {
    const history = useNavigate()
    const [markets, setmarkets] = useState([])

    useEffect(() => {
        if(!localStorage.token){
            history("/login")
        }
        const fetchData = async()=>{
            try {
               const res = await fetch('https://yfapi.net/v6/finance/quote/marketSummary?lang=en',{
                method:'get',
                headers:{'X-API-KEY': 'HHyNm3dsQG7SBl9QS8GkQ20kHUzUJsiI7pphccuT'}
            
               })
               const data = await res.json()
              const marketData = data['marketSummaryResponse'].result
              setmarkets(marketData)
              console.log(marketData);
               
                
            } catch (err) {
                console.log();
            }

        }
fetchData()
      
    }, [])


   
    return (

        

        <div>
          
            <h1 id="title">AudiTech</h1>
            <h1>Hello {localStorage.username}!!</h1>
            <h2>Markets-Review</h2>
          <Button id="logout" variant="contained"  onClick={()=>{localStorage.removeItem('token')
           history("/login")}}
         color="primary">Log Out</Button>
         <div className="markets">
        {markets.map((m,index)=><Item symb={m.symbol} marketName ={m.shortName} price={m.regularMarketPrice['raw']} key={index}/>)}
        </div>
        </div>
    )
}
