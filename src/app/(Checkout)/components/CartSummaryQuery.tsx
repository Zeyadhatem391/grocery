"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Trash, Plus } from "lucide-react";

// API item shape
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

// ================= Fetch Cart =================
const fetchCartItems = async () => {
  const res = await fetch("https://grocery.newcinderella.online/api/cart", {
    credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to fetch cart items");
  const json = await res.json();
  return json.data;
};

export default function CartSummaryQuery() {
  // ===== React Query =====
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cart-items"],
    queryFn: fetchCartItems,
  });

  const subtotal = Number(data?.subtotal || 0);
  const tax = Number(data?.tax || 0);
  const discount = Number(data?.discount || 0);
  const total = Number(data?.total || 0);

  return (
    <section className="flex justify-center gap-20">
      {/* ================= Cart Summary ================= */}
      <div className="w-[500]">
        <p className="font-medium text-xl mb-2">Cart Summary</p>

        <div className="w-full border border-gray-200 pl-6 shadow-sm rounded-md">
          <div className="max-h-[565] px-2 overflow-y-auto custom-scroll">
            {isLoading && <p className="p-4">Loading cart...</p>}
            {isError && <p className="p-4 text-red-500">Failed to load cart</p>}

            {data?.items?.map((item: CartItem) => (
              <div
                key={item.id}
                className="w-full border-b border-gray-300 flex gap-6 py-6"
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={item.meal.image_url || "/images/orange.png"}
                    alt={item.meal.title}
                    width={79}
                    height={80}
                    className="object-cover"
                  />
                  <div className="bg-[#0E1112] text-[12px] text-center rounded-tl-[15px] rounded-br-[15px] px-2">
                    <p className="text-[#F7FCFF]">
                      {item.meal.in_stock ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="font-normal text-lg">{item.meal.title}</p>

                  <div className="flex justify-start gap-24 items-center pt-4">
                    <div className="flex items-center border border-gray-200 gap-6 px-3 py-1 rounded-xl">
                      <Trash className="w-5 h-5 cursor-pointer" />
                      <p className="font-normal text-lg">{item.quantity}</p>
                      <Plus className="w-5 h-5 cursor-pointer" />
                    </div>

                    <div className="font-medium text-xl">
                      £ {item.meal.final_price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
                <p className="text-[#6B6F75] text-lg">Tax</p>
                <p className="text-[#6B6F75] text-lg">£ {tax.toFixed(2)}</p>
              </div>

              <div className="flex justify-between">
                <p className="text-[#6B6F75] text-lg">Discount</p>
                <p className="text-[#6B6F75] text-lg">
                  - £ {discount.toFixed(2)}
                </p>
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
