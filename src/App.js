import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { motion as m } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FruitPage from "./fruitPage";
import Footer from "./components/Footer/Footer";
import ProductPage from "./components/ProductPage";
import { data as items } from "./data";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <div className="pt-28">
                <FruitPage item={items[0]} />
                <div className="hidden md:block">
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/coconut"
          element={
            <div>
              <Navbar />
              <div className="pt-28">
                <FruitPage item={items[1]} />
                <div className="hidden md:block">
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/strawberry"
          element={
            <div>
              <Navbar />
              <div className="pt-28">
                <FruitPage item={items[2]} />
                <div className="hidden md:block">
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/blackberry"
          element={
            <div>
              <Navbar />
              <div className="pt-28">
                <FruitPage item={items[3]} />
                <div className="hidden md:block">
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/kiwi"
          element={
            <div>
              <Navbar />
              <div className="pt-28">
                <FruitPage item={items[4]} />
                <div className="hidden md:block">
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        {items.map((item) => (
          <Route
            path={item.productPage}
            element={
              <div>
                <Navbar />
                <div className="pt-28">
                  <ProductPage item={item} />
                  <div className="hidden md:block">
                    <div className="hidden md:block">
                      <Footer />
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        ))}
        <Route
          path="/shoppingCart"
          element={
            <div>
              <Navbar />
              <div className="pt-28">
                <ShoppingCart />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
