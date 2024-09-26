import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export const NewTrasnActionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={22} />
        </CloseButton>
        <form action="">
          <input type="text" placeholder="descrção" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton variant="income" type="button" value='income'>
              <ArrowCircleUp color="green" size={22} className="icon-up" />{' '}
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" type="button" value='outcome'>
              <ArrowCircleDown color="red" size={22} /> Saida
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
