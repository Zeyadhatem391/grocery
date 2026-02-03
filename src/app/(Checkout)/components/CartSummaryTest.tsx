"use client";

import Image from "next/image";
import { Trash, Plus } from "lucide-react";
import { useCart, CartItem } from "@/hooks/use-cart-test";

export default function CartSummaryNurmal() {
  const { data, isLoading, isError } = useCart();

  if (isLoading) return <p>Loading cart...</p>;
  if (isError) return <p>Error loading cart</p>;

  const safeItems: CartItem[] = Array.isArray(data?.data?.items)
    ? data.data.items
    : [];

  const subtotal = safeItems.reduce(
    (acc, item) => acc + Number(item.unit_price) * item.quantity,
    0,
  );

  const total = data?.data?.total ? Number(data.data.total) : subtotal;

  return (
    <section className="flex justify-center gap-20">
      <div className="w-[500]">
        <p className="font-medium text-xl mb-2">Cart Summary</p>

        <div className="w-full border border-gray-200 pl-6 shadow-sm rounded-md">
          {/* Products */}
          <div className="max-h-[565] px-2 overflow-y-auto custom-scroll">
            {safeItems.length === 0 && (
              <p className="text-center py-10 text-gray-500">
                Your cart is empty
              </p>
            )}

            {safeItems.map((item) => (
              <div
                key={item.id}
                className="w-full border-b border-gray-300 flex gap-6 py-6"
              >
                {/* Image */}
                <div className="flex flex-col items-center">
                  <Image
                    src={item.meal.image_url}
                    alt={item.meal.title}
                    width={79}
                    height={80}
                    className="object-cover"
                  />
                  {item.meal.in_stock && (
                    <div className="bg-[#0E1112] text-[12px] text-center rounded-tl-[15px] rounded-br-[15px] px-2 mt-1">
                      <p className="text-[#F7FCFF]">In Stock</p>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <p className="font-normal text-lg">{item.meal.title}</p>

                  <div className="flex justify-between items-center pt-4">
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

          {/* Total */}
          <div className="py-4 pr-7">
            <p className="text-[#014162] font-medium text-xl">Total Amount</p>

            <div className="flex flex-col gap-2 pt-4 pb-3 border-b border-gray-200">
              <div className="flex justify-between">
                <p className="text-[#6B6F75] text-lg">Subtotal</p>
                <p className="text-[#6B6F75] text-lg">
                  £ {subtotal.toFixed(2)}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-[#6B6F75] text-lg">Shipping</p>
                <p className="text-[#6B6F75] text-lg">£ 0.00</p>
              </div>
            </div>

            <div className="flex justify-between pt-3">
              <p className="font-medium text-lg">Total</p>
              <p className="text-lg font-normal">£ {total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
