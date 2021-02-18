import { React } from "react";

const Person =(props) =>{
    return(
        <div>
            <p>hello react this is my name {props.name} and my mobile number {props.mobile}</p>
        </div>
    )
}

export default Person;