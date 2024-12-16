import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Carts, Favorites, Home, Navbar } from "./components";
import { MyContext } from "./Context";
import Card_view from "./components/Card_view";

const App = () => {
  const { state, dispatch } = useContext(MyContext);

  useEffect(() => {
    let ls = localStorage.getItem("liked");
    if (ls) {
      dispatch({ type: "SET_WISHLIST_FROM_LS", payload: JSON.parse(ls) });
    }
    let lsC = localStorage.getItem("carts");
    if (lsC) {
      dispatch({ type: "SET_CARTS_FROM_LS", payload: JSON.parse(lsC) });
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/carts/:id" element={<Card_view />} />
      </Routes>
    </div>
  );
};

export default App;
