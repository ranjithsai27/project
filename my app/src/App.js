import './App.css';
import Person from "./Components/Person";
import { Component } from 'react';
import Ranjith from "./Ranjith";
import Comments from "./Components/comments/Comments";
import faker from "faker";
import Aproval from "./Components/aproval/Aproval";

const App = () =>{
  return(
    <div className="App">
      <div className="ui comments">
        <Aproval>
        <Comments name="Master" comment="movie is good" time="evng at 6:30" image={faker.image.image()}></Comments>
        </Aproval>
        <Aproval>
        <Comments name="Master" comment="movie is good" time="evng at 6:30" image={faker.image.image()}></Comments>
        </Aproval>
        <Aproval>
        <Comments name="Master" comment="movie is good" time="evng at 6:30" image={faker.image.image()}></Comments>
        </Aproval>
        <Aproval>  
        <Comments name="Master" comment="movie is good" time="evng at 6:30" image={faker.image.image()}></Comments>
        </Aproval>

      </div>

    </div>
  )
}








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
