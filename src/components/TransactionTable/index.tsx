import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bla</td>
            <td className="deposit">R$100</td>
            <td>Compras</td>
            <td>23/05/2022</td>
          </tr>
          <tr>
            <td>Ble</td>
            <td className="withdraw">R$100</td>
            <td>Compras</td>
            <td>23/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
