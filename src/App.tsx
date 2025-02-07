import { Header } from './components/Header';
import { IntroBanner } from './components/IntroBanner';
import { SpecCards } from './components/SpecCards';

function App() {
  return (
    <>
      <Header title="Upcoding" />
      <div style={{ paddingTop: "var(--header-height)" }}>
        <IntroBanner />
        <SpecCards />
      </div>
    </>
  );
}

export default App;
