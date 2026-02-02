import React from "react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 font-bold m-4 text-[#F7FCFF] px-8 py-8 w-162.5 h-51.25 bg-[#014162] rounded-3xl">
      {children}
    </div>
  );
}

export default Card;
