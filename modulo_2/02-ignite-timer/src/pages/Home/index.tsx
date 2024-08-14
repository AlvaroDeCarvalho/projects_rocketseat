import { Play, StopCircle } from 'phosphor-react'

import * as S from './styles'
import { createContext, useState } from 'react'
import { NewCycleForm } from './components/NewCycleForm'
import { CountDown } from './components/CountDown'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

interface CycleProps {
  id: string
  tasks: string
  minutesAmount: number
  startData: Date
  interruptedDate?: Date
  fineshedDate?: Date
}
interface CyclesContextProps {
  activeCycle: CycleProps | undefined
  activeCycleId: string | null
  markCycleAsFinished: () => void
  amountSecondsPassed: number
  setAmountSecondsPassed: (seconds: number) => void
}

export const CyclesContext = createContext({} as CyclesContextProps)

const newCycleValidateSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 1 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.')
})

type CycleValidadeScheme = zod.infer<typeof newCycleValidateSchema>

export function Home() {
  const [cycles, setCycles] = useState<CycleProps[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const newCycleForm = useForm<CycleValidadeScheme>({
    resolver: zodResolver(newCycleValidateSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const activeCycles = cycles.find((cycle) => cycle.id === activeCycleId)

  function handleCreateSubmit(data: CycleValidadeScheme) {
    const newCycle: CycleProps = {
      id: String(new Date().getTime()),
      tasks: data.task,
      minutesAmount: data.minutesAmount,
      startData: new Date()
    }
    setAmountSecondsPassed(0)
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(newCycle.id)

    reset()
  }

  function InsertSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function handleInterruptCycle() {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            interruptedDate: new Date()
          }
        } else {
          return cycle
        }
      })
    )
    setActiveCycleId(null)
  }

  function markCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            fineshedDate: new Date()
          }
        } else {
          return cycle
        }
      })
    )
  }

  const task = watch('task')
  console.log(cycles)
  return (
    <CyclesContext.Provider
      value={{
        activeCycle: activeCycles,
        activeCycleId: activeCycleId,
        markCycleAsFinished,
        setAmountSecondsPassed: InsertSecondsPassed,
        amountSecondsPassed
      }}
    >
      <S.HomeContainer>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <form action="" onSubmit={handleSubmit(handleCreateSubmit)}>
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <CountDown />
          {!activeCycles ? (
            <S.StartCycleButton type="submit" disabled={!task}>
              <Play size={24} /> Começar
            </S.StartCycleButton>
          ) : (
            <S.StopCycleButton onClick={handleInterruptCycle}>
              <StopCircle size={24} /> Interromper
            </S.StopCycleButton>
          )}
        </form>
      </S.HomeContainer>
    </CyclesContext.Provider>
  )
}
