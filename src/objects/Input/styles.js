import styled from 'styled-components'


const StyledInput = styled.input`
    position: absolute;
    //width: 771px;
    width: ${({width}) => width};
    height: 80px;
    left:${({left}) => left};
    top: ${({top}) => top};
   // left: 100px;
    //top: 580px;
    font-size:38px;
    background: #FFFFFF;
    border-radius: 0px 20px;
    
`

const StyledButao = styled.button`
    flex-direction:row;
    position: absolute;
    width: 303px;
    height: 83px;
    /* left: 575px; */
    left:${({left}) => left};
    top: ${({top}) => top};
    color:white;
    background: #FF7A00;
    border-radius: 0px 20px;
    font-size:20px;
    font-style:italic;

`

export {StyledButao, StyledInput}