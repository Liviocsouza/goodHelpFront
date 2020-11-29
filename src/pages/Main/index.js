import React, { Component } from 'react'
// import Link from  '../../objects/Link'
import {Link} from 'react-router-dom'
import logo from './logogoodhelp.png'
import {Header, HeaderLista, Container, ButtomHead, ContainerMain} from '../../componentes/ContainersHead'
import {Banner, Opacidade} from './Banner'
import Titulo from '../../objects/Titulo'
import SubTitulo from '../../objects/SubTitulo'
import {ButaoBusca, Input} from '../../objects/Input'
import {ContainerPrincipal , ContainerRight, ContainerLeft}from '../../componentes/ContainerInfo'
import {BordaLista } from '../../objects/Borda'
import Footer from './Footer'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome:""
        }
        console.log(this.state.nome)
        this.buscarBanco = (evento) =>{
            this.setState({nome: evento.target.value})
        };
    }
    render(){
        return(
            <ContainerMain>
                <Container>
                    <Header>
                        <img alt = "Logo" src = {logo} width = "174" height = "124"/>
                        <HeaderLista>
                            <li><Link to = "/Cadastro" style = {{textDecoration: 'none',color: "black"}}>Fale conosco</Link></li>
                            <li><Link to = "/Consulta" style = {{textDecoration: 'none',color: "black"}}>Conheça nossos(as) especialistas</Link></li>
                            |
                            <li><Link to = "/Entrar" style = {{textDecoration: 'none',color: "black"}}> Entre</Link></li>
                            <ButtomHead to = "/cadastro"><Link to = "/Cadastro" style = {{textDecoration: 'none',color: "black"}}>Cadraste-se</Link></ButtomHead>
                        </HeaderLista>
                    </Header>
                </Container>
                <div>
                <Banner>
                    <Opacidade>
                        <Titulo color = "#FF7A00" size = "50px" >Encontre seu(a) psicologo(a) online e comece a cuidar do seu emocional.</Titulo>
                        <SubTitulo top = "370px" width = "710px" size = "24px">
                            Descreva em poucas palavras o que está sentindo e encontre o profissional
                             mais adequado pra lhe atender. Agende sua consulta online, onde e quando quiser.
                        </SubTitulo>
                        <Input placeholder = "Descreva um motivo" 
                        value = {this.state.nome} 
                        onChange={this.buscarBanco}
                        type ="text"
                        width = "771px"
                        top = "580px"
                        left = "100px"
                        />
                        <ButaoBusca top = "581px" left = "575px" onChange = {(e)=>{console.log(this.state.nome)}}>Encontrar profissional</ButaoBusca>
                    </Opacidade>                
                </Banner>
                </div>
                {/* 
                <div style={{flex: 1, flexDirection: 'row'}}>
                    <div style={{width: 50, height: 50, backgroundColor: 'powderblue'}} >

                    </div>
                    <div style={{width: 50, height: 50, backgroundColor: 'red'}} >

                    </div>

                </div> */}
                <ContainerPrincipal>

                    <ContainerLeft>
                        <Titulo color = "#FF7A00" size = "25px" top = "20px"> Como funciona? </Titulo>
                        <Titulo color = "black" size = "32px" top = "56px"> Entenda nossa Terapia Online </Titulo>
                        <SubTitulo top = "120px" height = "50px" width = "600px" size = "25px">
                        Nossa equipe conta com profissionais de todo o Brasil 
                        para que você possa encontrar o(a) Psicólogo(a) ideal pra você!
                        </SubTitulo>
                        <BordaLista top = "220px" size = "20px"><p>Mais de 50 especialistas em saúde e desenvolvimento emocional</p></BordaLista>
                        <BordaLista top = "280px" size = "20px"><p>Consultas e mensagens criptografadas de ponta a ponta</p></BordaLista>
                        <BordaLista top = "340px" size = "20px"><p>Agende e reagende suas consultas quando precisar!</p></BordaLista>
                        <BordaLista top = "400px" size = "20px"><p>Utilize nossos filtros para encontrar o melhor profissional pra você!</p></BordaLista>
                        <BordaLista top = "460px" size = "20px"><p>Você tem o controle da sua experiência!</p></BordaLista>
                        <BordaLista top = "520px" size = "20px"><p>Mais de 50 especialistas em saúde e desenvolvimento emocional</p></BordaLista>

                    </ContainerLeft>

                    <ContainerRight>
                        
                    </ContainerRight>

                </ContainerPrincipal>
                <ButaoBusca top = "1420px" left = "110px">Encontrar profissional</ButaoBusca>

                <Footer top = "1530px">
                    <h2>IMPORTANTE: Em caso de crise suicida, ligue para 188 (CVV) ou acesse o site www.cvv.org.br para buscar aconselhamento ou atendimento imediato.</h2>
                    <p>Copyright © 2020 GoodHelp. Todos os direitos reservados.</p>
                </Footer>


               

                


            </ContainerMain>
            

        )

    }

}

export default Main