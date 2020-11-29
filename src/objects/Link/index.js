import React from 'react'
import StyledLink from './styles'


const Link = props => (<StyledLink {...props}>{props.children}</StyledLink>)


export default Link