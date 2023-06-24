import React from "react";

export default function MenuItem(props) {
  return (
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
                cursor-pointer
                "
    >
      {props.item}
    </div>
  );
}
