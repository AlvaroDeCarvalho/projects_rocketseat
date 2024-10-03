import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }
  button {
    cursor: pointer;
    background-color: transparent;
    color: ${(props) => props.theme['green-500']};
    border: solid 1px ${(props) => props.theme['green-500']};
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
    }
  }
`
