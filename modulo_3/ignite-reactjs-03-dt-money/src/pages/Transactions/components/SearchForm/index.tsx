import { SearchFormContainer } from './styles'
import {MagnifyingGlass} from 'phosphor-react'
export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Pesquisar" />
            <button type="submit"> <MagnifyingGlass  size={22}/>Pesquisar</button>    
        </SearchFormContainer>
    )
}