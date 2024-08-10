import * as S from './styles'

export function History() {
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
