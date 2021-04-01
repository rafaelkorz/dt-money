import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsTable } from './components/TransactionsTable';
import { GlobalStyle } from './styles/global';

export function App() {
  const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    SetIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    SetIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} />
      <TransactionsTable />
    </>
  );
}
