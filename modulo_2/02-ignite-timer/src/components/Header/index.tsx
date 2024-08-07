import * as S from './styles'
import Logo from '../../assents/Logo.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <S.HeaderContainer>
      <span>
        <img src={Logo} />
      </span>
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  )
}
