import React from "react";


// const Hero = (props) => {
//     console.log(props.name);
//     return (
//     <div>
//     <h1>Hello {props.name} a.k.a {props.alias}  </h1>
//     <p>{props.children}</p>
//     </div> 
//     )

    const Hero = ({name,alias,children}) => {
        console.log(name);
        return (
        <div>
        <h1>Hello {name} a.k.a {alias}  </h1>
        <p>{children}</p>
        </div> 
        )
    
};

export default Hero;