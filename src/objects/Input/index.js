import React from 'react'
import {StyledInput, StyledButao} from './styles'


const Input = props => (<StyledInput {...props}>{props.children}</StyledInput>)
const ButaoBusca = props => (<StyledButao {...props}>{props.children}</StyledButao>)


export {Input, ButaoBusca}