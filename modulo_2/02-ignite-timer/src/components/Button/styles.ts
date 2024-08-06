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
  background-color: ${(props) => {
    switch (props.variant) {
      case 'primary':
        return props.theme.primary
      case 'secondary':
        return props.theme.secondary
      case 'danger':
        return props.theme.danger
      case 'success':
        return props.theme.success
    }
  }};
`
