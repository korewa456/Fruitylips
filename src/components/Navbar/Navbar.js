import React, { useState } from "react";
import Container from "../Container";
import logo from "../../logo.png";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCount, selectItems } from "../../app/counterSlice";
import { useDispatch } from "react-redux";

export default function Navbar({ handleNavClick }) {
  const counter = useSelector(selectItems);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full bg-white z-10  font-semibold">
      <Container>
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex flex-row items-center my-6 gap-2">
            <div
              className="lg:hidden cursor-pointer border-2 border-white hover:border-slate-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon fontSize="large" />
            </div>
            <Link to="/">
              <img className="block cursor-pointer " src={logo} alt="Logo" />
            </Link>
            <nav className={!isOpen && "hidden"}>
              <ul className="">
                <Link to="/">
                  <MenuItem item="Bananas" />
                </Link>
                <Link to="/coconut">
                  <MenuItem item="Coconut" />
                </Link>
                <Link to="/strawberry">
                  <MenuItem item="Strawberry" />
                </Link>
                <Link to="/blackberry">
                  <MenuItem item="Blackberry" />
                </Link>
                <Link to="/kiwi">
                  <MenuItem item="Kiwi" />
                </Link>
              </ul>
            </nav>
          </div>

          <div className="hidden lg:flex lg:w-full lg:justify-between">
            <Link to="/">
              <MenuItem item="Bananas" />
            </Link>
            <Link to="/coconut">
              <MenuItem item="Coconut" />
            </Link>
            <Link to="/strawberry">
              <MenuItem item="Strawberry" />
            </Link>
            <Link to="/blackberry">
              <MenuItem item="Blackberry" />
            </Link>
            <Link to="/kiwi">
              <MenuItem item="Kiwi" />
            </Link>
          </div>
          <Link to="/shoppingCart">
            <div
              className="                
                block
                text-xl
                font-semibold
                py-3
                px-4
                rounded-full
                border-2
                border-white
                hover:border-slate-300
                transition
                cursor-pointer"
            >
              <ShoppingBagIcon fontSize="large" />
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
}
