import styled from 'styled-components'

import imagem from './banner.jpg'

const StyledBackGroungIMG = styled.div`
    background-image:url(${imagem});
    width: 1350px;
    height: 660px;
    align-items:center;
    /* position:absolute; */


`
const StyledOpacidade = styled.div`
    background-color: rgba(255,255,255,0.4);
    height:660px;
`


export  { StyledBackGroungIMG, StyledOpacidade }