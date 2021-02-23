import './App.css';
// import Person from "./Components/Person";
// import { Component } from 'react';
// import Ranjith from "./Ranjith";
import React, { Component, usestate } from "react";
// import Comments from "./Components/comments/Comments";
// import faker from "faker";
// import Aproval from "./Components/aproval/Aproval";



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pos: [
        {
          lat: null,
          long: null
        }
      ]
    };

    window.navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      this.setState({
        pos: {
          lat: position.coords.latitude,
          long: position.coords.longitude
        }
      })

    },
      error => {
        console.log(error)
        this.setState({
          errorMsg: error.message
        })
      }
    )
  }
  render() {
    if (!this.state.errorMsg && this.state.pos.lat) {
      return (
        <div className="App">
          hello your coords are <br></br>
          {console.log(this.State)}
        latitude:{this.state.pos.lat},
        longitude:{this.state.pos.long}
        </div>
      );
    }
    if (this.state.errorMsg && !this.state.pos.lat) {
      return <div>error:{this.state.errorMsg}</div>;
    }

    return <div>loading.....</div>

  }

}






























// const App = () =>{
//   return(
//     <div className="App">
//       <div className="ui comments">
//         <Aproval>
//         <Comments name="Master" comment="movie is good" time="evng at 6:30" image={faker.image.image()}></Comments>
//         </Aproval>
//         <Aproval>
//         <Comments name="Master" comment="movie is good" time="evng at 6:30" image={faker.image.image()}></Comments>
//         </Aproval>
//         <Aproval>
//         <Comments name="Master" comment="movie is good" time="evng at 6:30" image={faker.image.image()}></Comments>
//         </Aproval>
//         <Aproval>  
//         <Comments name="Master" comment="movie is good" time="evng at 6:30" image={faker.image.image()}></Comments>
//         </Aproval>

//       </div>

//     </div>
//   )
// }








// class App extends Component{
// state ={
//   User_details:[
// {"name":"ranith","mobile":"9640332828"}
//   ]
// };

// render(){
//   return (
// <div className="App">
//   <Person name={this.state.User_details[0].name} mobile={this.state.User_details[0].mobile}/>
//   <Ranjith/>
//   </div>
//   );

// }
// };

export default App;
