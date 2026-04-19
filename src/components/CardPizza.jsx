import React from "react";

const formatPrice = (value) => value.toLocaleString("es-CL");

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div style={styles.card}>
      {/* Imagen */}
      <img src={img} alt={name} style={styles.image} />

      {/* Contenido */}
      <div style={styles.body}>
        <h3 style={styles.name}>🍕 {name}</h3>

        {/* Ingredientes */}
        <p style={styles.ingredientsTitle}>Ingredientes:</p>
        <ul style={styles.ingredientsList}>
          {ingredients.map((ingredient, index) => (
            <li key={index} style={styles.ingredient}>
              {ingredient}
            </li>
          ))}
        </ul>

        {/* Precio y botón */}
        <div style={styles.footer}>
          <span style={styles.price}>${formatPrice(price)}</span>
          <button type="button" className="btn btn-outline-success btn-sm" style={styles.btn}>
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#1e1e2e",
    border: "1px solid #2e2e3e",
    borderRadius: "10px",
    overflow: "hidden",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  body: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    flex: 1,
  },
  name: {
    color: "#f5a623",
    fontSize: "1.2rem",
    fontWeight: "700",
    margin: 0,
  },
  ingredientsTitle: {
    color: "#aaaaaa",
    fontSize: "0.8rem",
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  ingredientsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    gap: "4px",
  },
  ingredient: {
    backgroundColor: "#2e2e3e",
    color: "#cccccc",
    fontSize: "0.75rem",
    padding: "2px 8px",
    borderRadius: "12px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "0.5rem",
  },
  price: {
    color: "#20c997",
    fontWeight: "700",
    fontSize: "1.1rem",
  },
  btn: {
    color: "#20c997",
    borderColor: "#20c997",
    backgroundColor: "transparent",
    fontSize: "0.8rem",
  },
};

export default CardPizza;
