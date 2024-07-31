import styled from "styled-components";
import { colors } from "../../styles";


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