import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

/* const ButtonActive = {
  primary: 'blue',
  secondary: 'gray',
  danger: 'red',
  success: 'green'
} */

export const ButtonContainer = styled.button<ButtonContainerProps>`
  color: #fff;
  width: 100px;
  height: 40px;
  border-radius: 8px;
  font-size: 22px;

  background-color: ${(props) => props.theme['green-500']};
`
