import { Play } from 'phosphor-react'

import * as S from './styles'

export function Home() {
  return (
    <S.HomeContainer>
      <form action="">
        <S.FormContainer>
          <label htmlFor="tasks">Vou Trabalhar em</label>

          <datalist id="tasks-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
            <option value="banana 5" />
          </datalist>

          <S.TasksInput
            type="text"
            id="tasks"
            list="tasks-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <label htmlFor="minutesAmount">durante</label>
          <S.TasksAmountInput
            type="number"
            id="minutesAmount"
            placeholder="- 00 +"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
          <S.CountdownContainer>
            <span>0</span>
            <span>0</span>
            <S.Separator>:</S.Separator>
            <span>0</span>
            <span>0</span>
          </S.CountdownContainer>
        </S.FormContainer>
        <S.PlayButoon type="submit" disabled={false}>
          <Play size={24} /> Enviar
        </S.PlayButoon>
      </form>
    </S.HomeContainer>
  )
}
