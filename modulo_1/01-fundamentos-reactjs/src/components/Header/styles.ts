import styled from "styled-components";
import {colors} from '../../styles'

export const HeaderStyle = styled.div`
    background-color: ${colors.gray800};
    display: flex ;
    justify-content: center;
    padding: 1.5rem 0;
    align-items: center;
    p {
        margin-left: 12px;
        font-size: 26px;
        font-weight: 500;
        color: ${colors.gray100};
    }
    img {
        height: 2rem;
    }
`
