import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Inversiones from './components/Inversiones.jsx';
import Contacto from './components/Contacto.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Inversiones />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
