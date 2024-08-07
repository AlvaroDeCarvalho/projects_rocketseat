import { Play } from 'phosphor-react'

import * as S from './styles'

export function Home() {
  return (
    <S.HomeContainer>
      <form action="">
        <S.FormContainer>
          <label htmlFor="tasks">Vou Trabalhar em</label>
          <input type="text" id="tasks" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="text" id="minutesAmount" />
          <span>minutos.</span>
          <S.CountdownContainer>
            <span>0</span>
            <span>0</span>
            <S.Separator>:</S.Separator>
            <span>0</span>
            <span>0</span>
          </S.CountdownContainer>
        </S.FormContainer>
        <S.PlayButoon type="submit">
          <Play size={24} /> Enviar
        </S.PlayButoon>
      </form>
    </S.HomeContainer>
  )
}
