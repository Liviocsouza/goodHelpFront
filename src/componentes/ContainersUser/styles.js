import styled from 'styled-components'

const StyledContainerMain = styled.div`
    width:100%;
    align-items:center;
`
const StyledContainer = styled.div`
    overflow-x:auto;
    padding-right: 10px;
    padding-left : 30px;
    width:100%;
    align-items:center;
    justify-content: center;
    display:flex;
    flex-direction:row;
`
const StyledContainerSignIn = styled.div`
    position: absolute;
    width: 770px;
    height: 837px;
    left: 298px;
    top: 214px;
    margin-left: auto;
    margin-rigth: auto;
    background: #B9B6B6;
`

const StyledContainerLoginIn = styled.div`
    position: absolute;
    width: 770px;
    height: 625px;
    left: 298px;
    top: 214px;
    margin-left: auto;
    margin-rigth: auto;
    background: #B9B6B6;
`

const StyledContainerInfo = styled.div`
    width: 577px;
    height: 74px;
    left: 96px;
    margin: 20px;
    position: 100%;
    margin-left: 100px;
    margin-rigth: 100px;

    font-family: Electrolize;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    padding: 20px 20px;

    color: rgba(0, 0, 0, 0.4);

    background: #FFFFFF;
    border: 1px solid #C1BBBB;
    box-sizing: border-box;
    border-radius: 20px;
`
const StyledContainerInfo2 = styled.input`
   width: 577px;
    height: 74px;
    left: 96px;
    margin: 20px;
    position: 100%;
    margin-left: 100px;
    margin-rigth: 100px;

    font-family: Electrolize;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    padding: 20px 20px;

    color: rgba(0, 0, 0, 0.4);

    background: #FFFFFF;
    border: 1px solid #C1BBBB;
    box-sizing: border-box;
    border-radius: 20px;
`

const StyledWelcome = styled.ul `
    width: 397px;
    height: 21px;
    left: 484px;
    top: 324px;
    margin-left: 160px;
    margin-rigth: 196px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */


    color: rgba(0, 0, 0, 0.6);
`

const StyledSignIn = styled.ul  `
    width: 185px;
    height: 35px;
    left: 590px;
    top: 253px;
    margin-left: 260px;
    margin-rigth: 280px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;

    /* Laranja */

    color: #FF7A00;
`
const StyledButtom = styled.button`
    width:134px;
    height:50px;
    left: 612px;
    top: 910px;
    align-items:center;
    background-color:#FF7A00;
    margin-left: 318px;
    margin-rigth: 280px;
    margin-bottom: 50px;

`
const StyledLogin = styled.ul  `
    overflow-x:auto;
    padding-right: 15px;
    padding-bottom: 15px;
    width:80%;
    justify-content:space-around;
    li{
        list-style :none;
        margin:200px;
        display: inline-block;
        font-size:20px;
        font-family:Offside;
        color:black;
    }
    
`

const StyledSocialLogin = styled.ul  `
    overflow-x:auto;
    padding-right: 15px;
    padding-bottom: 15px;
    width:80%;
    justify-content:space-around;
    color: #FF7A00;
    li{
        list-style :none;
        margin:200px;
        display: inline-block;
        font-size:20px;
        font-family:Offside;
        color: orange;
    }
`
const StyledCheckBox = styled.input`
    width: 14px;
    height: 13px;
    margin: 40px;
    margin-left: 220px;
    padding: 0x 0px;

    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
`
const StyledTermBox = styled.div`
    width: 14px;
    height: 13px;
    margin: 40px;
    margin-left: 220px;
    padding: 0x 0px;

    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
`

const StyledTermText = styled.ul`
    width: 366px;
    height: 10px;
    left: 511px;
    margin-top: -4px;
    margin-left: -15px;

    font-family: Electrolize;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    color: rgba(0, 0, 0, 0.61);
`

export { StyledSignIn,StyledCheckBox, StyledContainer,StyledContainerInfo2, StyledButtom,StyledContainerMain, StyledLogin, StyledWelcome, StyledContainerInfo, StyledContainerSignIn, StyledContainerLoginIn, StyledTermBox, StyledTermText, StyledSocialLogin } 