import { useContext } from 'react'
import * as S from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <S.HistoryContainer>
      <pre>{JSON.stringify(cycles)}</pre>

      <h1>Meu historico</h1>
      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>np
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Conserto de debitos tecnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <S.Status statusColor="green">Concluido</S.Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de debitos tecnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <S.Status statusColor="yellow">Em andamento</S.Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de debitos tecnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <S.Status statusColor="red">Interrompido </S.Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de debitos tecnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <S.Status statusColor="green">Concluido</S.Status>
              </td>
            </tr>
          </tbody>
        </table>
      </S.HistoryList>
    </S.HistoryContainer>
  )
}
