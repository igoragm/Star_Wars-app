import { createGlobalStyle } from "styled-components";
import {setColor, setFont} from "../../styles";


const Globals = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Poller+One&display=swap');

*{
margin:0;
padding:0;
box-sizing:border-box;
} 

body {
    font-family: ${setFont.main};
    font-size:100%;
    color:${setColor.mainWhite};
    background:${setColor.mainBlack};
}

h1{
    font-size:3em; line-height:1.2; margin-bottom:0.5em; text-transform:uppercase;
}
h2{
    font-size:2em; line-height:1.2; margin-bottom:0.75em;
    font-weight:bold;
}
h3{
    font-size:1.5em; line-height:1; margin-bottom:1em
}
h4{
    font-size:1.2em; line-height:1.2; margin-bottom:1.25em
}
p{
    line-height:1.5em; margin:0 0 1.5 0;  
}
ul {
    list-style-type: none;
  }
  
  ul li:hover {
    cursor: pointer;
  }

` ;



export default Globals;