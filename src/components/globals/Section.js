import styled from "styled-components";
import { setColor, setRem } from "../../styles";

// prettier
const Section = styled.div `
padding: ${setRem(64)} 0;
background: ${props => props.color};
background: ${setColor.mainBlack};


`;

export default Section;
