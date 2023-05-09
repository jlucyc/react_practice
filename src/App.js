import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  async function fetchData() {
    fetch("http://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(data => { 
      setData(data) 
      console.log(data);
    })
  
    //.then(json => console.log(json));
  }

  useEffect(() => {
    fetchData(); 

  // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <p> Activity: { data.activity } </p>
      <p> Type: { data.type } </p>
      <p> Participants:{ data.participants } </p>
      <p> Price: { data.price } </p>
      <p> Key: { data.key } </p>
      <p> Accessibility: { data.accessibility } </p>
      
    </div>
  );
}

export default App;
