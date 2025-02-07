import { Footer } from './components/Footer';
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
        <Footer />
      </div>
    </>
  );
}

export default App;
