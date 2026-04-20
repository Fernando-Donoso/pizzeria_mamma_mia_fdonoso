import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import pizzaNapolitana from "../assets/pizza_napolitana.png";
import pizzaEspanola from "../assets/pizza_espanola.png";
import pizzaPepperoni from "../assets/pizza_pepperoni.png";

const Home = () => {
  return (
    <div>
      {/* Hero / Banner principal */}
      <Header />

      {/* Sección de pizzas */}
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Nuestras Pizzas</h2>

        <div style={styles.grid}>
          <CardPizza
            name="Napolitana"
            price={5950}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
            img={pizzaNapolitana}
          />
          <CardPizza
            name="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
            img={pizzaEspanola}
          />
          <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img={pizzaPepperoni}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  section: {
    backgroundColor: "#12121f",
    padding: "2rem",
    minHeight: "200px",
  },
  subtitle: {
    color: "#f5a623",
    fontSize: "1.6rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.5rem",
  },
};

export default Home;
