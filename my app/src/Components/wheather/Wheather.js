import React from "react";

const getcurSes=(lat,month) =>{
console.log(lat,month);
    if(month>2 && month<9){
        return lat>0 ? 'summer' : 'winter'
    }else{
        return lat>0 ? 'winter' :'summer'
    }
}

const Wheather =(props) => {
    var ses =getcurSes(props.lat,new Date().getMonth());
    var text = ses =='winter' ? "It is very COLD" :"It is very HOT";
        return(
        <div>
            {text}
        </div>
    )
}



export default Wheather;