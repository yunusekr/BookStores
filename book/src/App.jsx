import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./components/home";
import Products from "./components/Products";
import Edit from "./components/Edit";
import AddBookPage from "./components/AddBookPage";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <section>
        <div className="flex justify-center">
          <div className="content pt-[70px]">
            <h2>BookStore</h2>
            <h2>BookStore</h2>
          </div>
        </div>
      </section>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/add">
          <AddBookPage />
        </Route>
        <Route exact path="/products/:id">
          <Edit />
        </Route>
      </Switch>
    </>
  );
}

export default App;
