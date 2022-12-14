import React from "react";
import styled from "styled-components";
import { setRem,setFont,setLetterSpacing, setColor } from "../../styles";

const Title = ( {className,title}) => {
    return <h1 className={className}> {title} </h1>;
};

// prettier
export default styled(Title)`
font-size: ${setRem(36)};
text-transform: uppercase;
text-align: center;
color: ${setColor.primaryColor};
${setLetterSpacing (5)};
${setFont.main};

`;

