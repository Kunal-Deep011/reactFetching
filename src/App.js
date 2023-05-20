import React,{useState,useEffect} from 'react';

import CoinRow from './CoinRow';

import './App.css'

const App = () =>{
    
  const [data,setData] = useState([]);

  useEffect(()=>{
     
    fetchedData();

  },[]);

  const fetchedData = async () =>{
       try{
         const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
         const Data = await res.json();
         console.log(Data);
         setData(Data);
       } catch(error){
          console.error("Error in fetching data",error);
       }
  };
  return(
       <div className='container'>

         <h1>Crypto World</h1>
         <table>
          <thead>
            <tr>
              <th className="head">Icon</th>
              <th className="head">Name</th>
              <th className="head">Id</th>
              <th className="head">Symbol</th>
              <th className="head">Current-Price</th>
              <th className="head">Volume</th>
            </tr>
          </thead>
          <tbody>
              {data.map((coin) =>(
                 
                 <CoinRow key={coin.id} coin={coin} />

              ))}
          </tbody>
         </table>
       </div>
  )

};
export default App;