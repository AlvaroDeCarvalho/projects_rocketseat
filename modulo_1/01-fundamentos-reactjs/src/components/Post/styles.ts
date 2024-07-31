import styled from "styled-components";
import { colors } from "../../styles";
import { Button } from "../Sidebar/styles";

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

    time {
        position: absolute;
        top: 60px;
        right: 12px;
    }

    
`
export const AuthorInfo = styled.div`
    display: block;
`

export const  FormContainer = styled.form`
    width: 100%;
    margin-top:1.5rem ;
    padding-top: 1.5rem;
    border-top: 1px solid ${colors.gray600};

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
      