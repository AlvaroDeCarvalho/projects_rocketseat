import { Play, StopCircle } from 'phosphor-react'

import * as S from './styles'
import { NewCycleForm } from './components/NewCycleForm'
import { CountDown } from './components/CountDown'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CyclesContext } from '../../contexts/CyclesContext'
import { useContext } from 'react'

const newCycleValidateSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 1 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.')
})

type CycleValidadeScheme = zod.infer<typeof newCycleValidateSchema>

export function Home() {
  const { activeCycle, cycles, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  console.log(cycles)
  const newCycleForm = useForm<CycleValidadeScheme>({
    resolver: zodResolver(newCycleValidateSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const { handleSubmit, watch /* , reset */ } = newCycleForm

  const task = watch('task')
  console.log(cycles)
  return (
    <S.HomeContainer>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <form action="" onSubmit={handleSubmit((state) => createNewCycle(state))}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />
        {!activeCycle ? (
          <S.StartCycleButton type="submit" disabled={!task}>
            <Play size={24} /> Começar
          </S.StartCycleButton>
        ) : (
          <S.StopCycleButton onClick={interruptCurrentCycle}>
            <StopCircle size={24} /> Interromper
          </S.StopCycleButton>
        )}
      </form>
    </S.HomeContainer>
  )
}
