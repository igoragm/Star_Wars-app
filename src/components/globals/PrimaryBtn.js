import styled from "styled-components";
import { setColor,setRem,setLetterSpacing,setFonts, setFont, setBorder, setTransition } from "../../styles";


export const PrimaryBtn = styled.button `
 display:inline-block;
 background: ${setColor.primaryColor};
 color: ${setColor.mainBlack};
 text-transform:capitalize;
 font-size: ${setRem(13)};
 ${setFont.main};
 padding: ${setRem(9)} ${setRem(12)};
 ${setBorder({color: setColor.primaryColor })}
${setLetterSpacing(3)};
${setTransition()};
&:hover{
    background: transparent;
    color: ${setColor.primaryColor};
}

${ props => ` margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0} `}
text-decoration: none;
cursor: pointer;


`

export default PrimaryBtn;