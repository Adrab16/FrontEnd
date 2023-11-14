import styled from "styled-components";

// export const RedButton = styled.button `
//      width: 200px;
//      height: 50px;
//      background-color: red;

// `

// export const GreenButton = styled.button `
//      width: 200px;
//      height: 50px;
//      background-color: green;

// `
// export const VioletButton = styled.button `
//      width: 200px;
//      height: 50px;
//      background-color: violet;
//      border-radius: 30px;

// `

export const Button = styled.button `
     width: 200px;
     height: 50px;
     border-radius: 30px;
     background-color: ${((props) =>props.backgrounColor)};

     &:hover {
        backgroun-color: coral;
     }
     &:hover {
        backgroun-color: yellow;


     }


`

