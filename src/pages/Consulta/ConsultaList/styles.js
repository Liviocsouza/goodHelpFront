import styled from 'styled-components'

const StyledContainer = styled.div`
    width:84%;
    margin-left:-60px;
    display: grid;
    grid-template-columns: auto;
    padding: 10px;
    border-radius: 10px;

    
`
const StyledItem = styled.div`
    float:${({float}) => float};
    background: white;
    padding: 3% 0% 2% 1%;
    margin: 3% 2%;
    border-radius: 30px;

`

const StyledContainerPerfil = styled.div`
    padding: 3%;
` 

const StyledContainerDados = styled.div `
    padding: 3%;
    width: 28%;
`
const StyledTitlePersona = styled.div `
    font-size: 25px;
    font-weight: 600;
    color: #FF7A00;
`

const StyledTitleEspecialidade = styled.div `
    font-size: 18px;
    opacity: 0.5;
`

const StyledContainerCalendar = styled.div `
    width: 248px;
`

export { StyledContainer, StyledItem, StyledContainerPerfil, StyledContainerDados, StyledTitlePersona, StyledTitleEspecialidade, StyledContainerCalendar} 