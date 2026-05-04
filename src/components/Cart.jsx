import React, { useState } from "react";
import pizzaNapolitana from "../assets/pizza_napolitana.jpg";
import pizzaEspanola from "../assets/pizza_espanola.jpg";
import pizzasalame from "../assets/pizza_salame.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";



export default function CartPage() {
  const [productos, setProductos] = useState([
    {
      id: "P001",
      name: "Napolitana",
      price: 5950,
      count: 1,
      img: pizzaNapolitana,
    },
    {
      id: "P002",
      name: "espanola",
      price: 7250,
      count: 1,
      img: pizzaEspanola,
    },
    {
      id: "P003",
      name: "Salame",
      price: 5990,
      count: 1,
      img: pizzasalame,
    },
  ]);


const modificarCantidad = (operacion, id)=>{
    console.log("Vamos a hacer una operación de ", operacion, " al producto con id ", id)

    let productoAModificar = productos.find(p => p.id === id)
    console.log("Producto a modificar: ", productoAModificar)

    if(operacion === "suma"){
      productoAModificar.count = productoAModificar.count + 1
    }
    if(operacion === "resta" && productoAModificar.count > 1){
      productoAModificar.count = productoAModificar.count - 1
    }

    let productosActualizados = productos.map(p => p)

    setProductos(productosActualizados)
}

  return (
    <>
      <div className="container">
        <h1>Carrito de Compras</h1>
        <div className="row">
          <div className="col-md-6">
            <ul className="">
              {productos.map((p, i) => (
                <li
                  key={i}
                  className="border rounded mt-2 p-3"
                  style={{ listStyle: "none" }}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <img style={{ width: "50px" }} src={p.img} alt="" />{" "}
                      {p.name}
                    </div>
                    <div>
                      <button className="btn btn-sm btn-secondary"
                      onClick={()=> modificarCantidad("suma", p.id)}
                      >+</button>{" "}
                      {p.count}
                      <button className="btn btn-sm btn-secondary ms-1"
                      onClick={()=> modificarCantidad("resta", p.id)}
                      >
                        -
                      </button>
                      <p>Total: ${(p.price * p.count).toLocaleString()}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-6 border rounded p-3" >
            <h3>Resumen de Compra</h3>
            <p>Total a Pagar: ${productos.reduce((total, producto) => total + (producto.price * producto.count), 0).toLocaleString()}</p>
              <button className="btn btn-primary">Finalizar Compra</button>
          </div>
        </div>
      </div>
    </>
  );
 }
