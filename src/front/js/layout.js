import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { WomenProducts } from "./pages/women-products";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { MenProducts } from "./pages/men-products";
import { FootwearProducts } from "./pages/footwear-products";
import { LogIn } from "./pages/log-in";
import { SignUp } from "./pages/sign-up";
import { ProductView } from "./pages/product-view";
import { ShoppingCart } from "./pages/shopping-cart";
import { Payment } from "./pages/payment";
import { UserShipment } from "./pages/user-shipment";
import ProductCard from "./component/productCard";
import Cart from "./component/cart";
import CartTotal from "./component/cartTotal";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<WomenProducts />} path="/women-products" />
            <Route element={<MenProducts />} path="/men-products" />
            <Route element={<FootwearProducts />} path="/footwear-products" />
            <Route element={<ProductView />} path="/products/:id" />
            <Route element={<LogIn />} path="/log-in" />
            <Route element={<SignUp />} path="/sign-up" />
            <Route element={<ShoppingCart />} path="/shopping-cart" />
            <Route element={<UserShipment />} path="/shipment" />
            <Route element={<Payment />} path="/payment" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<CartTotal />} path="/test" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
