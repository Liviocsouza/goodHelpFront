import styled from 'styled-components'
import imagem from '../../pages/Main/principal.png'

const StyledPrincipal = styled.div`
    flex-direction:row;
    background-color:#f2f1ef;
    height:700px;
    width:100%;
    position:absolute;
    /* top:660px; */
    flex:1;

`

const StyledLeft = styled.div`
    /* background-color:blue; */
    flex-direction:column;
    position:absolute;
     height:500px;
    width:720px; 
`
const StyledRight = styled.div`
    /* background-color:burlywood; */
    background-image:url(${imagem});
    /* width: 300px;
    height: 360px; */
    align-items:center;
    margin-top:170px;
    margin-left:720px;
    
    width:600px;
    height:400px;
    flex-direction:row;
`

export {StyledPrincipal,StyledLeft, StyledRight}