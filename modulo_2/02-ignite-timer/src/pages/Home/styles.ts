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

export const BaseButoon = styled.button`
  width: 35.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  overflow: hidden;
  color: #fff;
  font-size: 1.25rem;

  padding: 1rem 2rem;

  border-radius: 8px;
  border: none;
`
export const StartCycleButton = styled(BaseButoon)`
  background-color: ${(props) => props.theme['green-500']};
  &:disabled:hover {
    background-color: ${(props) => props.theme['green-700']};
    cursor: not-allowed;
    opacity: 0.7;
  }
`

export const StopCycleButton = styled(BaseButoon)`
  background-color: ${(props) => props.theme['red-500']};
`
