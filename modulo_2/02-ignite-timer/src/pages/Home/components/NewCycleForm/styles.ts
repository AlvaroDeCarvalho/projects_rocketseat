import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  flex-wrap: wrap;
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
