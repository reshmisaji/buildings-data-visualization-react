import React from 'react';
import './App.css';
import {data} from'./data.json'


const App = () =>{
const getData = () =>{
  return (<div style={{display:"flex",width:1000,height:300,justifyContent:"space-between"}}> 
  {data.map((datum,index) => <div style={{border:'1px solid black',width:100,height:datum.height/2,display:"flex",flexDirection:"column",justifyContent:"space-between"}} key={index} >
    <span>{datum.name}</span>
    <span>{datum.height}</span> </div>)}
  </div>)
}

const getSvgData = () => {
  return (<svg width="1000" height="500">
     <g fill="black">
     {data.map((datum,index) => <><rect  x={index*150} y="20"  width="100" height={datum.height/2} key={index} />
     <text x={index*150} y="40" fill="white" fontSize="12" >{datum.name}</text>
     <text x={index*150} y={10+(datum.height/2)} fill="white" fontSize="12" width="100" >{datum.height}</text></>)}
  </g>

  </svg>)
}

  return <div className="App">
    {getSvgData()}
    {getData()}
  </div>
}

export default App;
