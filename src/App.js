import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import "./index.css";

const App = (props) => {
  let users = [
    {
      name: "Nuray",
      lastName: "Bekmirova",
      age: 18,
      id: 141204,
    },
    {
      name: "Atai",
      lastName: "Balabekov",
      age: 13,
      id: 14664,
    },
    {
      name: "Atai",
      lastName: "Balabekov",
      age: 13,
      id: 147764,
    },
    {
      name: "Atai",
      lastName: "Balabekov",
      age: 13,
      id: 142264,
    },
  ];
  console.log(users);

  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;
