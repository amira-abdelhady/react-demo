import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Books from "./components/books/books";
import BookDetails from "./components/books/bookD";
import NotFound from "./pages/notFound/notFound";
import Header from "./components/header/header";
import LandingPage from "./pages/landingPage/landingPage";
import Products from "./components/products/products";
import ProductDetails from "./components/products/productD";
import TodolistComponent from "./pages/test";

function App() {
  const [isLogin, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(true);
  };
  return (
    <>
      {/* // day2
      <Login handleLogin={handleLogin}/>
      {isLogin && <Home/>}*/}
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/todo" exact component={Home} />
          <Route path="/books/:id"  component={BookDetails} />
          <Route path="/books"  component={Books} />
          <Route path="/todo" exact component={Home} />
          <Route path="/products/:id"  component={ProductDetails} />
          <Route path="/products"  component={Products} />
          <Route path="/t"  component={TodolistComponent} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
