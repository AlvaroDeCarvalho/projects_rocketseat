import { Play } from 'phosphor-react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import * as S from './styles'

const newCycleValidateSchema = zod.object({
  tasks: zod
    .string()
    .min(1, 'informe a tarefa')
    .max(50, 'máximo de 50 caracteres'),
  minutesAmount: zod
    .number()
    .min(5, 'mínimo de 5 minutos')
    .max(60, 'máximo de 60 minutos')
})

type CycleValidadeScheme = zod.infer<typeof newCycleValidateSchema>

export function Home() {
  function handleCreateSubmit(data: CycleValidadeScheme) {
    console.log(data)
    reset()
  }

  const { register, handleSubmit, watch, reset } = useForm<CycleValidadeScheme>(
    {
      resolver: zodResolver(newCycleValidateSchema)
    }
  )

  const task = watch('tasks')
  return (
    <S.HomeContainer>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <form action="" onSubmit={handleSubmit(handleCreateSubmit)}>
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
            {...register('tasks')}
          />

          <label htmlFor="minutesAmount">durante</label>
          <S.TasksAmountInput
            type="number"
            id="minutesAmount"
            placeholder="- 00 +"
            step={5}
            min={5}
            max={60}
            {...(register('minutesAmount'), { valueAsNumber: true })}
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
        <S.PlayButoon type="submit" disabled={!task}>
          <Play size={24} /> Enviar
        </S.PlayButoon>
      </form>
    </S.HomeContainer>
  )
}
;('')
