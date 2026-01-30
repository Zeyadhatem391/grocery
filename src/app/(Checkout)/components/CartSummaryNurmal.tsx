"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import { Trash, Plus } from "lucide-react";

type CartItem = {
  id: number;
  quantity: number;
  unit_price: string;
  subtotal: string;
  meal: {
    id: number;
    title: string;
    image_url: string;
    final_price: number;
    in_stock: boolean;
  };
};

export default function CartSummaryNurmal() {
  const [items, setItems] = useState<CartItem[]>([]);

  const base_url = "https://grocery.newcinderella.online";

  useEffect(() => {
    const token = "34|kj5AWk3pqAxQXAY8c8aZYeT5sPZ2MhgcIgOuT0bo1ceb4fbd";

    fetch(`${base_url}/api/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized or Failed request");
        return res.json();
      })
      .then((data: CartItem[]) => setItems(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <section className="flex justify-center gap-20">
      {/* ================= Cart Summary ================= */}
      <div className="w-[500]">
        <p className="font-medium text-xl mb-2">Cart Summary</p>

        <div className="w-full border border-gray-200 pl-6 shadow-sm rounded-md">
          {/* ===== Products Scroll Area ===== */}
          <div className="max-h-[565]  px-2 overflow-y-auto  custom-scroll">
            {/* ===== Product Item ===== */}
            {items.map((item) => (
              <div
                key={item.id}
                className="w-full border-b border-gray-300 flex gap-6 py-6"
              >
                {/* Image */}
                <div className="flex flex-col items-center">
                  <Image
                    src={item.meal.image_url}
                    alt="orange"
                    width={79}
                    height={80}
                    className="object-cover"
                  />
                  <div className="bg-[#0E1112] text-[12px] text-center rounded-tl-[15px] rounded-br-[15px] px-2">
                    <p className="text-[#F7FCFF]">In Stock</p>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <p className="font-normal text-lg">{item.meal.title}</p>

                  <div className="flex justify-start gap-24 items-center pt-4">
                    {/* Quantity */}
                    <div className="flex items-center border border-gray-200 gap-6 px-3 py-1 rounded-xl">
                      <Trash className="w-5 h-5 cursor-pointer" />
                      <p className="font-normal text-lg">{item.quantity}</p>
                      <Plus className="w-5 h-5 cursor-pointer" />
                    </div>

                    {/* Price */}
                    <div className="font-medium text-xl">
                      £ {item.unit_price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== Total Section ===== */}
          <div className="py-4 pr-7">
            <p className="text-[#014162] font-medium text-xl">Total Amount</p>

            <div className="flex flex-col gap-2 pt-4 pb-3 border-b border-gray-200">
              <div className="flex justify-between">
                <p className="text-[#6B6F75] text-lg">Subtotal</p>
                <p className="text-[#6B6F75] text-lg">£ 555.45</p>
              </div>

              <div className="flex justify-between">
                <p className="text-[#6B6F75] text-lg">Shipping</p>
                <p className="text-[#6B6F75] text-lg">£ 25</p>
              </div>
            </div>

            <div className="flex justify-between pt-3">
              <p className="font-medium text-lg">Total</p>
              <p className="text-lg font-normal">£ 580.45</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
