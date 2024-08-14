import { useContext } from 'react'
import * as S from './styles'
import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns'
import { CyclesContext } from '../../contexts/CyclesContext'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <S.HistoryContainer>
      <h1>Meu historico</h1>
      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.length === 0 ? (
              <tr>
                <td colSpan={4}>Nenhum ciclo registrado</td>
              </tr>
            ) : (
              cycles.map((cycle) => (
                <tr key={cycle.id}>
                  <td>{cycle.tasks}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(cycle.startData, {
                      locale: ptBR,
                      addSuffix: true
                    })}
                  </td>
                  <td>
                    {cycle.fineshedDate && (
                      <S.Status statusColor="green">Concluido</S.Status>
                    )}
                    {cycle.interruptedDate && (
                      <S.Status statusColor="red">Interrompido</S.Status>
                    )}
                    {!cycle.fineshedDate && !cycle.interruptedDate && (
                      <S.Status statusColor="yellow">Em andamento</S.Status>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </S.HistoryList>
    </S.HistoryContainer>
  )
}
