import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../app/counterSlice";
import data from "../data";
import Input from "@mui/joy/Input";
import { Button } from "@mui/joy";

export default function ShoppingCart() {
  const items = useSelector(selectItems);
  const total = items.map((item) => data[item.id].price * item.amount);
  const sum = total.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const tax = (sum * 0.0775).toFixed(2);
  const grandTotal = parseFloat(sum) + parseFloat(tax);

  return (
    <div className="max-w-7xl lg:h-auto mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10  lg:py-20 ">
      <div>
        <div className="flex flex-col gap-6 shadow-md border-4 p-10">
          <div className="flex flex-col gap-2">
            <div className="my-2 font-bold text-lg">Contact</div>
            <Input className="w-full h-14" placeholder="Email" />
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <div className="text-sm">Email me with news and offers</div>
            </div>
          </div>
          <div>
            <div className="my-2 font-bold text-lg">Shipping Address</div>
            <div className="flex flex-col gap-4">
              <Input className="w-full h-14" placeholder="Country" />
              <div className="flex flex-row gap-4">
                <Input className="w-full h-14" placeholder="First Name" />
                <Input className="w-full h-14" placeholder="Last Name" />
              </div>

              <Input className="w-full h-14" placeholder="Company (optional)" />
              <Input className="w-full h-14" placeholder="Address" />
              <Input
                className="w-full h-14"
                placeholder="Apartment, suite, etc. (optional)"
              />
              <div className="flex flex-row gap-4">
                <Input className="w-full h-14" placeholder="City" />
                <Input className="w-full h-14" placeholder="State" />
                <Input className="w-full h-14" placeholder="ZIP Code" />
              </div>
              <Input className="w-full h-14" placeholder="Phone" />
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <div className="text-sm">Text me with news and offers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 shadow-md border-4 p-10">
        <div>
          <div
            className={
              items.length === 0
                ? "flex justify-center font-bold text-lg"
                : "hidden"
            }
          >
            Your Cart is Empty
          </div>
          {items.map((item) => (
            <div className="flex flex-row justify-between gap-2 items-center">
              <div className="flex flex-row gap-3 items-center">
                <div className="border-2 rounded-2xl overflow-hidden cursor-pointer w-20 h-20 flex justify-center">
                  <img src={data[item.id].icon.default} />
                </div>
                <div>{data[item.id].title}</div>
              </div>
              <div className="flex flex-col">
                <div>${data[item.id].price * item.amount}.00</div>
                <div className="text-sm">Qty: {item.amount}</div>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div className="flex flex-row justify-center gap-3">
          <Input className="w-full h-14" placeholder="Enter your promo code" />
          <Button
            className="w-40"
            variant="solid"
            color="primary"
            type="submit"
          >
            Apply
          </Button>
        </div>
        <hr />
        <div>
          <div className="flex flex-row justify-between">
            <div>Sub Total</div>
            <div>${sum}.00</div>
          </div>
          <div className="flex flex-row justify-between">
            <div>Delivery Fee</div>
            <div>Calculated Next page</div>
          </div>
          <div className="flex flex-row justify-between">
            <div>Tax (7.75%)</div>
            <div>${tax}</div>
          </div>
        </div>
        <hr />
        <div className="flex flex-row justify-between">
          <div>Total</div>
          <di>${grandTotal} USD + delivery fee</di>
        </div>
      </div>
    </div>
  );
}
