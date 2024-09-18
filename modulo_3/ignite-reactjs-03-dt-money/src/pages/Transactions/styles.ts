import styled from "styled-components";

interface PriceHighlightProps {
    variant: 'income' |'outcome'
}

export const TransactionContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem  auto 0;
    padding: 0 1.5rem;
`

export const TransactionTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;

    td {
        padding: 1rem 2rem;
        background:${props => props.theme["gray-700"]};

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }
    }
`
export const PriceHighlight = styled.span<PriceHighlightProps>`
    ${props => props.variant === 'income' ?
     `color: ${props.theme["green-500"]}` :
      `color: ${props.theme["red-500"]}`};
`
