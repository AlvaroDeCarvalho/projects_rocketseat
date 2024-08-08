import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    max-width: 800px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  flex-wrap: wrap;
`

export const CountdownContainer = styled.div`
  margin-top: 3rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;

    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme['green-500']};
  overflow: hidden;
`

const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['green-500']};
  font-size: 1.125rem;
  font-weight: 1.25rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }
`

export const TasksInput = styled(BaseInput)`
  flex: 1;
  max-width: auto;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const TasksAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const PlayButoon = styled.button`
  width: 35.5rem;
  background-color: ${(props) => props.theme['green-500']};

  cursor: pointer;
  overflow: hidden;
  color: #fff;
  font-size: 1.25rem;

  padding: 1rem 2rem;

  border-radius: 8px;
  border: none;

  &:disabled {
    background-color: ${(props) => props.theme['green-500']};
    cursor: not-allowed;
    opacity: 0.7;
  }
`
