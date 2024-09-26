import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const searchFormScheama = z.object({
  query: z.string()
})

type SearchFormType = z.infer<typeof searchFormScheama>

export function SearchForm() {
  const { register, handleSubmit, formState: {isSubmitted} } = useForm<SearchFormType>({
    resolver: zodResolver(searchFormScheama)
  })

  function handleSearchTransaction() {}

  return (
    <SearchFormContainer>
      <input
        type="text"
        placeholder="Pesquisar"
        disabled={isSubmitted}
        onSubmit={handleSubmit(handleSearchTransaction)}
        {...register('query')}
      />
      <button type="submit">
        <MagnifyingGlass size={22} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
