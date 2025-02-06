import { useState } from 'react';
import { Header } from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <Header title="Upcoding" />
      <h1 onClick={handleClick}>App</h1>

    </>
  );
}

export default App;
