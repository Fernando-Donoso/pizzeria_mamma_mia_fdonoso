import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      {/* Hero / Banner principal */}
      <Header />

      {/* Contenido de la página */}
      <div style={styles.content}>
        <h2 style={styles.subtitle}>Nuestras Pizzas</h2>
        <p style={styles.text}>
          Explora nuestra carta y elige tu pizza favorita. 🍕
        </p>
      </div>
    </div>
  );
};

const styles = {
  content: {
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#12121f",
    minHeight: "200px",
  },
  subtitle: {
    color: "#f5a623",
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
  },
  text: {
    color: "#aaaaaa",
    fontSize: "1rem",
  },
};

export default Home;
