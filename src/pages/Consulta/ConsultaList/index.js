import React, {Component} from 'react'
import {StyledContainer, StyledItem, StyledContainerPerfil, StyledContainerDados, StyledTitlePersona, StyledTitleEspecialidade, StyledContainerCalendar} from './styles'
import Titulo from '../../../objects/Titulo'
//import DatePicker from 'react-datepicker'
import DatePicker, { DateInput, TimeInput } from '@trendmicro/react-datepicker';
import '@trendmicro/react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const Container = props => (<StyledContainer {...props} >{props.children}</StyledContainer>)
const Item = props => (<StyledItem {...props}>{props.children}</StyledItem>)
const ContainerPerfil = props => (<StyledContainerPerfil {...props} >{props.children}</StyledContainerPerfil>)
const ContainerDados = props => (<StyledContainerDados {...props} >{props.children}</StyledContainerDados>)
const ContainerCalendar = props => (<StyledContainerCalendar {...props} >{props.children}</StyledContainerCalendar>)
const TitlePersona = props => (<StyledTitlePersona {...props} >{props.children}</StyledTitlePersona>)
const TitleEspecialidade = props => (<StyledTitleEspecialidade {...props} >{props.children}</StyledTitleEspecialidade>)

class ConsultaList extends Component{
    constructor(props){
        super(props);
        this.state = { consultas : this.props.consulta,
                       date : moment().format('YYYY-MM-DD')};
    }
    

    render(){
        return(
            <Container>
                {
                    
                    this.state.consultas.map(c => {
                        return(
                            
                            <Item>
                                    
                                 <div style= {{display:"flex"}}>
                                    <ContainerPerfil>
                                        <img src = {c.imagem} style = {{width: "270px", height: "200px"}}/>
                                    </ContainerPerfil>
                                    <ContainerDados>
                                        <TitlePersona>{c.nome}  {c.avaliacao}</TitlePersona> 
                                        <TitleEspecialidade>
                                            <div>Especialidades:</div>
                                            <div>{c.especialidades}</div>
                                        </TitleEspecialidade>
                                    </ContainerDados>
                                    <ContainerCalendar>
                                            <DatePicker
                                                    date = {this.state.date}
                                                    onSelect = {date =>{
                                                        this.setState(state =>({date:date}));
                                                    }}
                                                />
                                            <button style = {{margin: "1% 25%", width: "50%", padding: "2%", background: "#FF7A00", borderRadius: "16px", border: "white", color: "white"}}>Marcar consulta</button>
                                    </ContainerCalendar>
                                </div>
                            </Item>
                        )

                    })
                }

            </Container>



        )
    }

}

export default  ConsultaList