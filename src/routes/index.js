import React, { Component} from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Main from '../pages/Main'
import SignIn from '../pages/SignIn'
import Consulta from '../pages/Consulta'
import LoginIn from '../pages/Login'

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component = {Main}/>
                    <Route exact path = "/Cadastro" component = {SignIn}/>
                    <Route exact path = "/Consulta" component = {Consulta}/>
                    <Route exact path = "/Entrar" component = {LoginIn}/>
                </Switch>
            </BrowserRouter>
        )}
}

export default Router