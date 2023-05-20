import React from 'react';
import "./CoinRow.css"
const  CoinRow= ({coin}) => {
  return (
    <tr>
      <td className='row'>
        <img src={coin.image} alt={coin.name} style={{ width: '24px', height: '24px' }} />
      </td>
      <td className='row'>{coin.name}</td>
      <td className='row'>{coin.id}</td>
      <td className='row'>{coin.symbol.toUpperCase()}</td>
      <td className='row'>${coin.current_price}</td>
      <td className='row'>{coin.total_volume}</td>
    </tr>
  );
};

export default CoinRow;
