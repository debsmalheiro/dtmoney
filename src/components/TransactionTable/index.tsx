import { useEffect } from "react";

import { Container } from "./styles";

export function TransactionTable() {

  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
    .then(response => response.json())
    .then(data => console.log(data));
  }, [])

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
