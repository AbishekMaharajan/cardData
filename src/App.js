import "./App.css";
import React from "react";
import CardData from "./component/CardData";
import axios from "axios";
import { useState, useEffect } from "react";
// import LoginForm from "./component/LoginForm";
import Header from "./component/Header";
const baseURL = "https://jsonplaceholder.typicode.com/photos/";
function App() {
  const [cardItem, setCardItem] = useState([]);
  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     const filterData = response.data.slice(0, 10);
  //     console.log(filterData);
  //     setCardItem(filterData);
  //   });
  // }, []);
  // fetching data using async await
  useEffect(() => {
    (async () => {
      const photos = await axios.get(baseURL);
      const filterData = photos.data.slice(0, 10);
      console.log(filterData);
      setCardItem(filterData);
    })();
  }, []);
  return (
    <>
      <Header />
      <CardData items={cardItem} />
      {/* <LoginForm /> */}
    </>
  );
}

export default App;
