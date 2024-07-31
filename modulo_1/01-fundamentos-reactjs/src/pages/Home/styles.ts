import styled from "styled-components";


export const WrapperHome = styled.div`
     max-width: 70rem;
    margin:2rem auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 256px 1fr;
    gap: 24px;
    align-items: flex-start;
    
    @media (max-width: 768px) {

        grid-template-columns: 1fr;

    }
`