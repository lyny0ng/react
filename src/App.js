import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect, useReducer } from "react";

function App() {
  const [ loading, setLoading ] = useState(true);
  const [ coins, setCoins ] = useState([]);

  useEffect( () => {
    // 백앤드로부터 데이터를 받아오기 위해 api를 호출하고 데이터를 응답받기 위해 쓰는 함수
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then( (response) => response.json() )
    .then( (json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);

  //money input
  const [ money, setMoney ] = useState();

  const onChange = (event) => {
    setMoney(event.target.value);
  }

  //coin
  const [ coinValue, setCoinValue ] = useState(0);
  const changeMoney = (event) => {
    setCoinValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="container">
      <h1>The Coins! { loading ? "" : `(${coins.length})`}</h1>
      { loading ? <strong>Loading...</strong> : 
      <form>
        <label for="select">Please select coin.</label><br></br>
        <select id="select" onChange={changeMoney}>
        <option>Select Coin.</option>
        {coins.map((coin) => (
        <option value={coin.quotes.USD.price}>
          {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
        </option>
        ))}
      </select>
      <br></br>
      <br></br>
      <label for="usd">Please enter your USD.</label><br></br>
      <input id="usd" type="number" value={money} placeholder="please type your USD." onChange={onChange}></input> <span>USD </span><br></br>
      <br></br>
      <hr></hr>
      
      <h3> You can buy { money / coinValue} {coins.symbol} coin! :)</h3>
      </form>}
      
    </div>
  )
}

export default App;
