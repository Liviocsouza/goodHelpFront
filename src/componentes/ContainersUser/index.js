import React from 'react'
import { StyledSignIn,StyledCheckBox, StyledContainer,StyledContainerInfo2, StyledButtom,StyledContainerMain, StyledLogin, StyledWelcome, StyledContainerInfo, StyledContainerSignIn, StyledContainerLoginIn, StyledTermBox, StyledTermText, StyledSocialLogin }   from './styles'

const Container = ({children}) => <StyledContainer>{children}</StyledContainer>
const SignIn = ({children}) => <StyledSignIn>{children}</StyledSignIn>
const ButtomHead = props => (<StyledButtom {...props}>{props.children}</StyledButtom>)
const ContainerMain = ({children}) => <StyledContainerMain>{children}</StyledContainerMain>
const Login = ({children}) => <StyledLogin>{children}</StyledLogin>
const SocialLogin = ({children}) => <StyledSocialLogin>{children}</StyledSocialLogin>
const Welcome = ({children}) => <StyledWelcome>{children}</StyledWelcome>
const ContainerInfo = ({children}) => <StyledContainerInfo>{children}</StyledContainerInfo>
const ContainerInfo2 = props => (<StyledContainerInfo2 {...props}></StyledContainerInfo2>)
const ContainerSignIn = ({children}) => <StyledContainerSignIn>{children}</StyledContainerSignIn>
const ContainerLoginIn = ({children}) => <StyledContainerLoginIn>{children}</StyledContainerLoginIn>
const TermBox = ({children}) => <StyledTermBox>{children}</StyledTermBox>
const TermText = ({children}) => <StyledTermText>{children}</StyledTermText>
const CheckBox = props => (<StyledCheckBox {...props}></StyledCheckBox>)


export { CheckBox, SignIn, Login, SocialLogin, Container, ButtomHead, ContainerMain, Welcome, ContainerInfo, ContainerSignIn, ContainerLoginIn, TermBox, TermText, ContainerInfo2 }