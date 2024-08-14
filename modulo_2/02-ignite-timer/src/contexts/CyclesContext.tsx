import { createContext, useState } from 'react'

interface ElementCycleProvider {
  children: React.ReactNode
}

interface CyclePropsData {
  task: string
  minutesAmount: number
}

interface CycleProps {
  id: string
  tasks: string
  minutesAmount: number
  startData: Date
  interruptedDate?: Date
  fineshedDate?: Date
}

interface CyclesContextProps {
  cycles: CycleProps[]
  activeCycle: CycleProps | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  createNewCycle: (data: CyclePropsData) => void
  interruptCurrentCycle: () => void
  markCycleAsFinished: () => void
  setAmountSecondsPassed: (seconds: number) => void
}

export const CyclesContext = createContext({} as CyclesContextProps)

export function CyclesContextProvider({ children }: ElementCycleProvider) {
  const [cycles, setCycles] = useState<CycleProps[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycles = cycles.find((cycle) => cycle.id === activeCycleId)

  function InsertSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCycleAsFinished() {
    setCycles(
      cycles.map((cycle) => {
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

  function createNewCycle(data: CyclePropsData) {
    const newCycle: CycleProps = {
      id: String(new Date().getTime()),
      tasks: data.task,
      minutesAmount: data.minutesAmount,
      startData: new Date()
    }
    setAmountSecondsPassed(0)
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(newCycle.id)
    /* reset() */
  }

  function interruptCurrentCycle() {
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

  return (
    <CyclesContext.Provider
      value={{
        activeCycle: activeCycles,
        activeCycleId: activeCycleId,
        amountSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
        markCycleAsFinished,
        setAmountSecondsPassed: InsertSecondsPassed,
        cycles: cycles
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
