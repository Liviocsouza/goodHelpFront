import React, { Component } from 'react'
import Link from  '../../objects/Link'

import logo from './logogoodhelp.png'
import Footer from '../Main/Footer'
import {  SignIn,CheckBox, Container, ContainerMain, Welcome, ContainerInfo,ContainerInfo2, ContainerLoginIn, ButtomHead, TermBox, TermText, Login, SocialLogin } from '../../componentes/ContainersUser'

class LoginIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            contato:"",
            senha:""
        }
      
        
      
        this.changContato = (evento) =>{
            this.setState({contato: evento.target.value})
        };
        this.changSenha = (evento) =>{
            this.setState({senha: evento.target.value})
        };
      
        this.enviarLogin = (evento) => {
            console.log("ENVIAR POHA")
        };


    }
    
    render() {
        return(
            <ContainerMain>
                <Container>
                <img alt = "Logo" src =  {logo} width = "248" height = "177"/>
                <ContainerLoginIn>
                    <SignIn>
                    <Link to = "/">Entre</Link>
                    </SignIn>
                    <Welcome>
                    <Link to = "/">Bem vindo! Por favor entre com suas credenciais.</Link>
                    </Welcome>                    
                    <ContainerInfo2 
                         placeholder = "(DDD)Celular ou Email" 
                         value = {this.state.contato} 
                         onChange={this.changContato}
                         type ="text"
                    />
                        
                   
                    <ContainerInfo2 
                        placeholder = "Senha" 
                        value = {this.state.senha} 
                        onChange={this.changSenha}
                        type ="password"
                        
                    />
                   
                   
                    <ButtomHead onClick = {this.enviarLogin}>
                        Entrar
                    </ButtomHead>
                    <Login>
                        Ou logue por:<SocialLogin>Facebook      LikedIn      Google</SocialLogin>                        
                    </Login>
                </ContainerLoginIn>
                </Container>
                <Footer top = "900px">
                    <h2>IMPORTANTE: Em caso de crise suicida, ligue para 188 (CVV) ou acesse o site www.cvv.org.br para buscar aconselhamento ou atendimento imediato.</h2>
                    <p>Copyright © 2020 GoodHelp. Todos os direitos reservados.</p>
                </Footer>
            </ContainerMain>
        )
    }
}

export default LoginIn