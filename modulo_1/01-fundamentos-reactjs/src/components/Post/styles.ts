import styled from "styled-components";
import { colors } from "../../styles";
import { Button } from "../Sidebar/styles";

type PropsHidden = {
    isFocus: boolean;
}

export const Article = styled.article`
    position: relative;
    display: block;
    background-color: ${colors.gray600};
    border-radius: 8px;
    margin: 2.5rem;
    padding: 2rem;

    a {
        color: ${colors.green500};
        font-weight: bold;
        margin-right: 12px;
    }

    .author {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    p{
        margin: 25px  12px;
    }

    .commentList {
        margin-top: 2rem;
    }
    
`
export const AuthorInfo = styled.div`
    display: block;
`

export const HiddenButton = styled.div<PropsHidden>`
    display: ${props => props.isFocus ? 'block' : 'none'};
`

export const TimePost = styled.time`

    position: absolute;
    font-size: 0.875rem;
    top: 60px;
    right: 12px;
    
    span {
        @media (max-width: 768px) {
            visibility: hidden;
        }
    }
`

export const  FormContainer = styled.form`
    width: 100%;
    margin-top:1.5rem ;
    padding-top: 1.5rem;
    border-top: 1px solid #000;

    ${Button}{
        margin: 1rem 0 0 0;
    }

    >strong {
        line-height: 1.6;
        color: ${colors.gray100};
    } 
    textarea {
        width: 100%;
        border: 1px solid ${colors.green500};
        height: 6rem;
        padding: 1rem;
        resize: none;
        border-radius: 8px;
        color: ${colors.gray100};
        margin-top: 1rem;
        background-color: ${colors.gray800};
    }
      
      `
      