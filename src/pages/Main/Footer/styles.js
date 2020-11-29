import styled from 'styled-components'

const StyledFooter = styled.div`
    //color:#FF7A00;
    background-color: #100F0F;
    color:white;
    position: absolute;
    width: 100%;
    height:200px;
    /* left: 100px; */
    top: ${({top}) => top};
    /* font-weight: 600; */
    
    
    font-size: ${({size}) => size};
    line-height: 45px;
    h2{
        font-size:25px;
        padding-left:100px;
        padding-right:100px;

    }
    p{
        font-size:15px;
        padding-left:100px;
        padding-right:100px;
    }
    
    

`

export default StyledFooter