import React, { lazy, Suspense, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import "./App.scss";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Page404 } from "../Page404/Page404";
import { ThankYouPage } from "../common/ThankYouPage/ThankYouPage";

import { store } from "../../redux/store";
import { setProducts } from "../../redux/reducers/cart-reducer";

const Home = lazy(() => import("../Home/Home"));
const About = lazy(() => import("../About/About"));
const Menu = lazy(() => import("../Menu/Menu"));
const Reservation = lazy(() => import("../Reservation/Reservation"));
const Gallery = lazy(() => import("../Gallery/Gallery"));
const Contact = lazy(() => import("../Contact/Contact"));
const Cart = lazy(() => import("../Cart/Cart"));
const BillingDetails = lazy(() => import("../Cart/BillingDetails"));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("products")) {
      dispatch(
        setProducts(JSON.parse(localStorage.getItem("products") as string))
      );
    }
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<BillingDetails />} />
            <Route
              path="/ordered"
              element={<ThankYouPage title="order" />}
            />
            <Route
              path="/reserved"
              element={<ThankYouPage title="reservation" />}
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

const AppContainer: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default AppContainer;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

