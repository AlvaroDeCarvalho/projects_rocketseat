import { Play, StopCircle } from 'phosphor-react'

import { useForm } from 'react-hook-form'
import { differenceInSeconds } from 'date-fns'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import * as S from './styles'
import { useEffect, useState } from 'react'

const newCycleValidateSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.')
})

type CycleValidadeScheme = zod.infer<typeof newCycleValidateSchema>

interface CycleProps {
  id: string
  tasks: string
  minutesAmount: number
  startData: Date
  interruptedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<CycleProps[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<CycleValidadeScheme>(
    {
      resolver: zodResolver(newCycleValidateSchema),
      defaultValues: {
        task: '',
        minutesAmount: 0
      }
    }
  )

  const activeCycles = cycles.find((cycle) => cycle.id === activeCycleId)
  useEffect(() => {
    let interval: number | undefined
    if (activeCycles) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycles.startData)
        )
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [activeCycles])

  const totalSeconds = activeCycles ? activeCycles.minutesAmount * 60 : 0
  const currentSeconds = activeCycles ? totalSeconds - amountSecondsPassed : 0

  const currentMinutes = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(currentMinutes).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycles) {
      document.title = `${minutes}:${seconds} | Pomodoro`
    }
  }, [activeCycles, minutes, seconds])

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

  const task = watch('task')
  console.log(cycles)
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
            disabled={!!activeCycles}
            {...register('task')}
          />

          <label htmlFor="minutesAmount">durante</label>
          <S.TasksAmountInput
            type="number"
            id="minutesAmount"
            placeholder="- 00 +"
            step={5}
            min={5}
            max={60}
            disabled={!!activeCycles}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
          <S.CountdownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <S.Separator>:</S.Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
          </S.CountdownContainer>
        </S.FormContainer>

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
  )
}
