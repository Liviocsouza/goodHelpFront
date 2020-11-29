import styled from 'styled-components'


const StyledSubTitulo = styled.h1`
   position: absolute;
    /* width: 711px; */
    /* width: 90px; */
    width:${({width}) => width};
    left: 100px;
    /* top: 280px; */
    top: ${({top}) => top};

    font-family: Encode Sans Condensed;
    font-style: normal;
    font-weight: 300;
    font-size: ${({size}) => size};
    line-height: 30px;

color: #000000;
`

export default StyledSubTitulo