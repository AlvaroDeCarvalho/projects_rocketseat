import { useContext, useEffect, useState } from 'react'
import * as S from './styles'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../..'

export function CountDown() {
  const { activeCycle, activeCycleId, markCycleAsFinished } =
    useContext(CyclesContext)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const currentMinutes = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(currentMinutes).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} | Pomodoro`
    }
  }, [activeCycle, minutes, seconds])

  useEffect(() => {
    let interval: number | undefined
    if (activeCycle) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      interval = setInterval(() => {
        const differenceNowToStart = differenceInSeconds(
          new Date(),
          activeCycle.startData
        )
        if (differenceNowToStart >= totalSeconds) {
          markCycleAsFinished()
          setAmountSecondsPassed(0)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(differenceNowToStart)
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId, markCycleAsFinished])

  return (
    <S.CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <S.Separator>:</S.Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </S.CountdownContainer>
  )
}