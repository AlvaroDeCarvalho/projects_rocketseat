import * as S from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  return (
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
        disabled={!!activeCycle}
        {...register('task')}
      />
      <label htmlFor="minutesAmount">durante</label>
      <S.TasksAmountInput
        type="number"
        id="minutesAmount"
        placeholder="- 00 +"
        step={1}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </S.FormContainer>
  )
}
