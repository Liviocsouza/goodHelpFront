import React from 'react'
import StyledTitulo from './styles'


const Titulo = props => (<StyledTitulo {...props}>{props.children}</StyledTitulo>)


export default Titulo