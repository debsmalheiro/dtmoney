import { useState } from "react";

import { GlobalStyle } from "./styles/global";

import Modal from "react-modal";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { TransactionProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

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
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}
