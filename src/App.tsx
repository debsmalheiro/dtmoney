import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    SetIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    SetIsNewTransactionModalOpen(false);
  };
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
