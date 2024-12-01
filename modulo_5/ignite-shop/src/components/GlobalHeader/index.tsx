"use client"

import logoImg from '../../assets/logo.svg'
import { Container, Header } from './styles'
 
 const GlobalHeader = ({children}: {children: any}) => {
    return (
        <Container>
            <Header>
                <img src={logoImg.src}  />
            </Header>
            {children}
        </Container>
    ) 
}   

export default GlobalHeader