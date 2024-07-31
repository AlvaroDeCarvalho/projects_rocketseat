import styled from 'styled-components'
import { colors } from '../../styles'

type PropsImg = {
    type?: 'thumbnail' | 'profile'
    marginTop?: number
}
type PropsButton = {
    type?: 'native'
}
export const Wrapper = styled.div`
    padding: 0 1rem;
    main {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        
    }
    `

export const Button = styled.button<PropsButton>`

    width: ${props => props.type == 'native' ? '90px': '100$%'};
    background-color:${(props) => props.type == 'native' ? `${colors.green500}`: 'transparent'} ;
    color: ${props => props.type == 'native'? '#fff': `${colors.green500}`};
    border-radius: 8px;
    border: 1px solid ${colors.green500};
    height: 50px;
    padding: 0 1.5rem ;
    border-radius: 8px;
    font-weight: bold;
    text-decoration: none ;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    
`
export const ImageProfile = styled.img<PropsImg>`
    box-sizing: ${(props) => props.type == 'thumbnail' ? 'border-box' :'initial'}; 
    width: ${(props) => props.type == 'thumbnail' ? '100%' :'4rem'};
    border-radius:  ${(props) => props.type == 'thumbnail' ? '0' : '8px'};;
    height:  ${(props) => props.type == 'thumbnail' ? '88px' :'4rem'};;
    border:  ${(props) => props.type == 'thumbnail' ? '0' :`4px solid ${colors.gray800}`};;
    margin-top: ${(props) => props.type == 'thumbnail' ? '0' :`${props.marginTop}rem`};
    object-fit: cover;
    outline:2px solid ${colors.green500};

`