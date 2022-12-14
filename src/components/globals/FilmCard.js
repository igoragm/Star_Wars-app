import styled from "styled-components";

import { setColor, setRem, media, sizes } from "../../styles";  // višak, ne ostavljaj neiskorišćene importe

// pogledaj https://prettier.io/ za formatiranje koda
const FilmCard = styled.div `

width: 90vw;
margin: 0 auto;
${media.large `
width:100vw;
max-width:1170px;
`};
/*1170-90= 1080*/ //izbaci komentare

display: grid;
grid-template-columns: repeat(auto-fit,minmax(360px,1fr));
grid-column-gap:${setRem(45)};



`;

// Zar ovo nije lepši i čitljiviji kod? ;)
const FilmCardFormatted = styled.div `
    width: 90vw;
    margin: 0 auto;
    ${media.large `
        width:100vw;
        max-width:1170px;
    `};
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(360px,1fr));
    grid-column-gap:${setRem(45)};
`;

export default FilmCard;
