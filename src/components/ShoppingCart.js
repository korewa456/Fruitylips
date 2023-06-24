import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../app/counterSlice";
import data from "../data";

export default function ShoppingCart() {
  const items = useSelector(selectItems);
  console.log(items);

  return (
    <div className="max-w-7xl h-screen lg:h-auto mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10  lg:py-20">
      <div>Address</div>
      <div className="flex flex-col">
        <div>
          Item listings
          {items.map((item) => (
            <div className="flex flex-row justify-between gap-2">
              <div className="flex flex-row gap-3 items-center">
                <div className="border-2 rounded-2xl overflow-hidden cursor-pointer w-20 h-20 flex justify-center">
                  <img src={data[item.id].icon.default} />
                </div>
                <div>{data[item.id].title}</div>
              </div>
              <div>{data[item.id].price * item.amount}</div>
            </div>
          ))}
        </div>
        <hr />
        <div className="">promo</div>
        <hr />
        <div>
          <div className="flex flex-row justify-between">
            <div>sub total</div>
            <div>$25.99</div>
          </div>
        </div>
        <hr />
        <div>
          <div>Total</div>
          <di>usd $25.99</di>
        </div>
      </div>
    </div>
  );
}
