import styled from 'styled-components'


const StyledBorda = styled.div`
    align-items:center;
    justify-content:center;
    border-width: 1px;
    border-radius:5px;
    border-style: solid;
    border-color: black;
    height:50px;
    background-color:#C4C4C4;
    position: absolute;
    width: 600px;
    font-style:normal;
    /* width: 90px; */
    /* width:${({width}) => width}; */
    left: 100px;
    color:black;
    top: ${({top}) => top};
    font-size:${({size}) => size};
    

color: #000000;
`

export default StyledBorda