import styled from 'styled-components'


const StyledTitulo = styled.h1`
    //color:#FF7A00;
    color: ${({color}) => color};
    position: absolute;
    width: 711px;
    /* height:200px; */
    left: 100px;
    top: ${({top}) => top};
    /* font-weight: 600; */
    font-size: ${({size}) => size};
    line-height: 45px;

`

export default StyledTitulo