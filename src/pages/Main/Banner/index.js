import React from 'react'
import {StyledBackGroungIMG, StyledOpacidade} from './styles'

const Banner = ({children}) => <StyledBackGroungIMG>{children}</StyledBackGroungIMG>
const Opacidade =({children}) => <StyledOpacidade>{children}</StyledOpacidade>

export  {Banner, Opacidade}