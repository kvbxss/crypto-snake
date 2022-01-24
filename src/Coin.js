import React from "react";
import './Coin.css';
const coin = ({ image, name, symbol, price, volume, priceChange, marketcap}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="coin" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Price: zł{price}</p>
          <p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
          <p className="coin-volume">Volume: zł{volume.toLocaleString()}</p>
        {priceChange < 0 ? (
          <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
        ) : (
        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>)}
        <p className="coin-marketcap">
          Market Cap: zł{marketcap.toLocaleString()}
        </p>
        </div>
      </div>
    </div>
  );
};

export default coin;
