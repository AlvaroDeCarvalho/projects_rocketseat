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
    max-width: 70rem;
    margin:2rem auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 256px 1fr;
    gap: 24px;
    align-items: flex-start;
    
    main {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        
    }
    `

export const Aside  = styled.aside`
    border-radius: 5px;
    overflow: hidden;
    background-color: ${colors.gray800};
    .profile {
        display: flex;
        align-items: center;
        flex-direction: column;
        span {
        font-size: 14px;
        margin-bottom: 1rem;
        }
        strong {
            margin-top: 16px;
            line-height: 1.6;
            color: ${colors.gray100};
        }
    }

    footer {
        border-top: 1px solid ${colors.gray600};
        padding: 1.5rem;
        padding: 1.5rem 2rem 2rem;
        
        a {
            width: 100%;
            background-color: transparent;
            color: ${colors.green500};
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
        }
        
    :hover {
            transition: 1s;
            background-color: ${colors.green500};
            color: #fff;
        }
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