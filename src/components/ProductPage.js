import React from "react";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateAmount, selectItems } from "../app/counterSlice";

export default function ProductPage({ item }) {
  const [index, setIndex] = useState(0);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectItems);

  const changeAmount = (num) => {
    if (num <= 0) {
      setAmount(1);
    } else {
      setAmount(num);
    }
  };

  const handleClick = (idx) => {
    setIndex(idx);
  };
  const handleAddToCart = () => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      dispatch(updateAmount({ id: item.id, amount: existingItem.amount + 1 }));
    } else {
      const newItem = {
        id: item.id,
        amount: amount,
      };
      dispatch(addItem(newItem));
    }
  };

  return (
    <>
      <section className="max-w-7xl h-screen lg:h-auto mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-items-center lg:py-20">
        <article className="lg:block">
          <img
            src={item.alterImage[index]}
            alt=""
            className="w-full lg:w-[40rem] lg:h-[40rem] lg:rounded-2xl cursor-pointer "
          />
          <ul className="flex flex-row lg:flex items-center justify-start gap-5 flex-wrap mt-5">
            {item.alterImage.map((item, idx) => (
              <li
                key={item.id}
                onClick={() => handleClick(idx)}
                className={`${
                  idx === index && "border-2 border-orange-400 opacity-80"
                } border-2 rounded-2xl overflow-hidden cursor-pointer w-20 h-20 flex justify-center`}
              >
                <img src={item} alt="" className="w-20" />
              </li>
            ))}
          </ul>
        </article>
        <article className="px-8 pb-10">
          <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
            FRESH IN STOCK
          </h2>
          <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">
            {item.productTitle}
          </h1>
          <p className="text-slate-600 mb-10 leading-relaxed">
            {item.productDescription}
          </p>

          <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
            <ul className="flex items-center gap-5">
              <li className="text-slate-900 font-bold text-2xl">
                ${item.price * amount}.00
              </li>
              <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-sm font-bold inline-block rounded shadow">
                50%
              </li>
            </ul>

            <p className="text-slate-600 text-sm">
              <s>${item.price * 2 * amount}.00</s>
            </p>
          </div>

          <div className="mt-10 lg:flex items-center justify-between gap-2">
            <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1">
              <li
                className="cursor-pointer"
                onClick={() => changeAmount(amount - 1)}
              >
                <RemoveIcon />
              </li>
              <li>{amount} lb</li>
              <li
                className="cursor-pointer"
                onClick={() => changeAmount(amount + 1)}
              >
                <AddIcon />
              </li>
            </ul>
            <div className="lg:flex-1">
              <button className="flex items-center justify-center gap-4 bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200">
                <ShoppingCartIcon onClick={handleAddToCart} /> Add to cart
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
