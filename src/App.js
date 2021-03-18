
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let [data,setData]=useState({})
  useEffect(()=>{
    fetch(`/.netlify/functions/hello?name=Pakistan Zindabad`)
    .then(response=>response.json())
    .then(data=>setData(data))
  },[])
  console.log(data)
  return (
    <div className="App">
     <h1>Hello World This is App deploy on Netlify</h1>
    <h2>{data.message}</h2>
    </div>
  );
}

export default App;
