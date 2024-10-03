import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'

const newTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type typeNewTransaction = z.infer<typeof newTransactionSchema>

export const NewTrasnactionModal = () => {
  const createTransaction  = useContextSelector(TransactionsContext, (context)=> {
    return context.createTransaction
  })

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitted },
    reset,
  } = useForm<typeNewTransaction>({
    resolver: zodResolver(newTransactionSchema),
    defaultValues: { type: 'income' },
  })

  async function handleCreateNewTransaction(data: typeNewTransaction) {
    const { description, price, category, type } = data

    await createTransaction({
      description,
      price,
      category,
      type,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={22} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="descrção"
            disabled={isSubmitted}
            required
            {...register('description')}
          />

          <input
            type="number"
            placeholder="Preço"
            disabled={isSubmitted}
            required
            {...register('price', { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Categoria"
            disabled={isSubmitted}
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              console.log(field)
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton
                    variant="income"
                    type="button"
                    value="income"
                  >
                    <ArrowCircleUp
                      color="green"
                      size={22}
                      className="icon-up"
                    />{' '}
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton
                    variant="outcome"
                    type="button"
                    value="outcome"
                  >
                    <ArrowCircleDown color="red" size={22} />
                    Saida
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitted}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
