import React from 'react'
import {StyledHead, StyledLista, StyledContainer, StyledButtom, StyleContainerMain} from './styles'

const Container = ({children}) => <StyledContainer>{children}</StyledContainer>
const Header = ({children}) => <StyledHead>{children}</StyledHead>
const HeaderLista = ({children}) => <StyledLista>{children}</StyledLista>
const ButtomHead = ({children}) => <StyledButtom>{children}</StyledButtom>
const ContainerMain = ({children}) => <StyleContainerMain>{children}</StyleContainerMain>

export { Header, HeaderLista, Container, ButtomHead, ContainerMain}