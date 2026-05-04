import { useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

import pizzaNapolitana from "../assets/pizza_napolitana.png";
import pizzaEspanola from "../assets/pizza_espanola.png";
import pizzaPepperoni from "../assets/pizza_pepperoni.png";
import pizzaCuatro from "../assets/pizza_cuatro.jfif";
import pizzaBacon from "../assets/pizza_bacon.jfif";
import pizzaPollo from "../assets/pizza_pollo.jfif";


const Home = () => {

const [listapizzas, setPizzas] = useState([
  {
    desc: "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
    id: "P001",
    img: pizzaNapolitana,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    name: "napolitana",
    price: 5950,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P002",
    img: pizzaEspanola,
    ingredients: ["mozzarella", "tomates", "jamón", "choricillo"],
    name: "española",
    price: 7250,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P003",
    img: pizzaPepperoni,
    ingredients: ["mozzarella", "tomates", "salame", "orégano"],
    name: "salame",
    price: 5990,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P004",
    img: pizzaCuatro,
    ingredients: ["mozzarella", "salame", "aceitunas", "champiñones"],
    name: "cuatro estaciones",
    price: 9590,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P005",
    img: pizzaBacon,
    ingredients: ["mozzarella", "tomates cherry", "bacon", "orégano"],
    name: "bacon",
    price: 6450,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P006",
    img: pizzaPollo,
    ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
    name: "pollo picante",
    price: 8500,
  },
]);

  return (
    <div>
      {/* Hero / Banner principal */}
      <Header />

      {/* Sección de pizzas */}
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Nuestras Pizzas</h2>

        <div style={styles.grid}>
            {listapizzas.map((pizza) => (
              <CardPizza
                key={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            ))}
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
