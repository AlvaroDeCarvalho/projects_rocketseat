import { ButtonContainer } from './styles.ts'
type Button = {
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
}

export function ButtonVariant({ variant = 'primary' }: Button) {
  return <ButtonContainer variant={variant}>click</ButtonContainer>
}
