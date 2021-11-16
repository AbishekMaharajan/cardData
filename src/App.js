import "./App.css";
import React from "react";
import CardData from "./component/CardData";
import { Container } from "react-bootstrap";
import axios from "axios";
// import LoginForm from "./component/LoginForm";
// import Header from "./component/Header";
import { useState, useEffect } from "react";
const baseURL = "https://jsonplaceholder.typicode.com/photos/";
function App() {
  const [cardItem, setCardItem] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const filterData = response.data.slice(0, 10);
      console.log(filterData);
      setCardItem(filterData);
    });
  }, []);
  return (
    <>
      <CardData items={cardItem} />
      {/* <Header /> */}
      {/* <LoginForm /> */}
    </>
  );
}

export default App;
