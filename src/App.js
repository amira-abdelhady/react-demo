import logo from "./logo.svg";
import React, { Suspense } from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { counter } from "./store/actions";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/header/header";
import CounterContextCom from "./components/context/counterContext";
import { CounterContextProvider } from "./counterContext";
const LandingPage = React.lazy(() => import("./pages/landingPage/landingPage"));
const Login = React.lazy(() => import("./pages/login/login"));
const Home = React.lazy(() => import("./pages/home/home"));
const NotFound = React.lazy(() => import("./pages/notFound/notFound"));
const Books = React.lazy(() => import("./components/books/books"));
const BookDetails = React.lazy(() => import("./components/books/bookD"));
const Products = React.lazy(() => import("./components/products/products"));
const ProductsThunk = React.lazy(() => import("./components/products/productsThunk"));
const ProductDetails = React.lazy(() =>
  import("./components/products/productD")
);
const Counter = React.lazy(() => import("./components/counter/counter"));

function App() {
  const [isLogin, setLogin] = useState(false);
  const [counter, setCounter] = useState(12);
  const handleLogin = () => {
    setLogin(true);
  };
  return (
    <>
      {/* // day2
      <Login handleLogin={handleLogin}/>
      {isLogin && <Home/>}*/}
      <Provider store={store}>
        <CounterContextProvider value={{counter,setCounter}}>
        <Router>
          <Header />
          <Suspense fallback="loading ....">
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/login" exact component={Login} />
              <Route path="/todo" exact component={Home} />
              <Route path="/books/:id" component={BookDetails} />
              <Route path="/books" component={Books} />
              <Route path="/todo" exact component={Home} />
              <Route path="/products/:id" component={ProductDetails} />
              <Route path="/products" component={Products} />
              <Route path="/productsT" component={ProductsThunk} />

              <Route path="/count" exact component={Counter} />
              <Route path="/C" exact component={CounterContextCom} />
              <Route path="*" exact component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
        </CounterContextProvider>
      </Provider>
    </>
  );
}

export default App;
