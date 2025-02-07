import { useState } from 'react';
import { Header } from './components/Header';
import { IntroBanner } from './components/IntroBanner';

function App() {
  return (
    <>
      <Header title="Upcoding" />
      <IntroBanner />
    </>
  );
}

export default App;
