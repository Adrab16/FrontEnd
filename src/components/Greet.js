import React from "react";

// function Greet(){
//     return <h1>Hello Moi !</h1>
// }

const Greet = (props) => {
    console.log(props.name);
    return (
    <div>
    <h1>Hello {props.name} a.k.a {props.alias} </h1>
    <p>{props.children}</p>
    </div> 
    )

    
    
}

export default Greet;