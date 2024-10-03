import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'

const searchFormScheama = z.object({
  query: z.string(),
})

type SearchFormType = z.infer<typeof searchFormScheama>

export function SearchForm() {
  const fetchTransaction  = useContextSelector(TransactionsContext, (context)=>{
    return context.fetchTransaction
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm<SearchFormType>({
    resolver: zodResolver(searchFormScheama),
  })

  async function handleSearchTransaction(data: SearchFormType) {
    await fetchTransaction(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Pesquisar"
        disabled={isSubmitted}
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitted}>
        <MagnifyingGlass size={22} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
