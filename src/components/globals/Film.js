import React from 'react';
import styled from 'styled-components';
import { setRem, setLetterSpacing,setTransition, setColor, setShadow, setBorder }  from "../../styles"; // višak, ne ostavljaj neiskorišćene importe
//import PropTypes from 'prop-types'; - višak, ne ostavljaj komentare

const Film = styled.div `
background: ${setColor.mainBlack};
color: ${setColor.mainWhite};
margin: ${setRem(32)} 0;
position: relative;
display:block;
${setTransition};
&:hover{
    color: ${setColor.primaryColor};
}
.date {
    position:absolute;
    top:50%;
    left:50%;
    transform:translate (-50%,-50%);
    color: ${setColor.primaryColor};

}
`;

export default Film;