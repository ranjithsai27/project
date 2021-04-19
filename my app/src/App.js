import "./App.css";
import React from 'react';
import { BasicTable } from "./Components/basictable/BasicTable";

function App (){
  return(
    <div className='App'>
      <BasicTable />
    </div>
  )
}


































// import axios from "axios";
// import React, { Component, getData,useEffect } from "react";

// const App = () => {
//   const getData = async () => {
//     await axios.get('https://en.wikipedia.org/w/api.php', {
//       params: {
//         action: "query",
//         list: "search",
//         origin: "*",
//         format: "json",
//         srsearch: "html"
//       }
//     });
//     console.log(getData);
//   }
// };

// useEffect(() => {
//   getData();
// }, []);

// const App =() =>{
//   return(
//   <div className="App">
//     <h1>hello world</h1>
//   </div>
//   )
//   };






export default App;
