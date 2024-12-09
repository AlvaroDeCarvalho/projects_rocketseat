'use client'
import styled from "styled-components"

export const HomeContainer = styled.main`
    display: flex;
    width: 100%;
    max-width: calc(100vw - ((100vw - 1080px) /2));
    margin-left: auto;
    min-height: 656px;

`;


export const Product = styled.a`
    background: linear-gradient(180deg, #1ea483 0%, #7475d4 100%);
    border-radius: 8px;
    padding: 0,25rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        object-fit: cover;
    }

    footer {
        position: absolute;
        bottom: 0.25rem;
        left: 0.25rem;
        right:0.25rem ;
        border-radius: 6px;
        padding: 2rem;
        display: flex;
        align-items:center;
        justify-content: space-between;
        background-color:rgba(0,0,0,0.6);
        transform: translateY(110%);
        opacity: 0;
        transition: all 0.3s ease-in-out;
        strong {
            font-size: ${({theme}) => theme.fontSizes.lg};
        }

        span {
            font-size: ${({theme}) => theme.fontSizes.xl};
            font-weight: bold;
            color:${({theme}) => theme.colors.green300} ;
        }

    }   
    &:hover {
        footer {
            transform: translateY(0);
            opacity: 1;
        }
    }

`