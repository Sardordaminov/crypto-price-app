import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cetherium%2Clitecoin%2Cdogecoin&vs_currencies=usd&include_24hr_change=true')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  })
  return (
    <div className="App">
      Salom
    </div>
  );
}

export default App;
