import styled from "styled-components";

import { setColor, setRem, media, sizes } from "../../styles";

const FilmCard = styled.div `

width: 90vw;
margin: 0 auto;
${media.large `
width:100vw;
max-width:1170px;
`};
/*1170-90= 1080*/

display: grid;
grid-template-columns: repeat(auto-fit,minmax(360px,1fr));
grid-column-gap:${setRem(45)};



`;

export default FilmCard;
