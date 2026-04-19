import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
      <div style={styles.wrapper}>

      {/* Barra de navegación */}
      <Navbar />

      {/* Contenido principal */}
      <main style={styles.main}>
        {/* Aquí irán los demás componentes y rutas */}
      </main>

      {/* Pie de página */}
      <Footer />

    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
  },
};


export default App
