import {useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionContext'

export const useSummary = () => {
  const transaction = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = transaction.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }
      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )
  return summary
}