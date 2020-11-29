import React from 'react'
import {StyledPrincipal, StyledLeft, StyledRight} from './styles'


const ContainerPrincipal = props => (<StyledPrincipal {...props}>{props.children}</StyledPrincipal>)
const ContainerLeft = props => (<StyledLeft {...props}>{props.children}</StyledLeft>)
const ContainerRight = props => (<StyledRight {...props}>{props.children}</StyledRight>)


export  {ContainerPrincipal, ContainerLeft, ContainerRight}