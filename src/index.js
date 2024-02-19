import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Pizza Co. Delicious</h1>;
    </header>
  );
}

function Menu() {
  // const pizzaData = [];
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizzaObj, index) => {
              return <Pizza pizzaObj={pizzaObj} key={index} />;
            })}
          </ul>
        </>
      ) : (
        <p>Sorry, we're currently sold out!</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  const { name, ingredients, photoName, price, soldOut } = pizzaObj;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold Out" : price + "$"}</span>
      </div>
    </li>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  const message = isOpen ? "We're currently open!" : "We're currently closed!";

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <>
            <p>
              {message} ©{currentYear} Pizza Co. Delicious
            </p>
            <Order />
          </>
        ) : (
          <p>
            {message}
            <br /> We're open from {openHour}:00 to {closeHour}:00 <br />©
            {currentYear} Pizza Co. Delicious
          </p>
        )}
      </div>
    </footer>
  );
}

function Order() {
  return <button className="btn">Order</button>;
}

// React v18
const root = document.getElementById("root");
const createRoot = ReactDOM.createRoot(root);
createRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
// ReactDOM.render(<App />, root);
