import Image from "next/image";
import { Trash, Plus } from "lucide-react";

type CartSummaryProps = {
  quantity: number;
  total: number;
};

export default function CartSummary({ quantity, total }: CartSummaryProps) {
  return (
    <div className="w-full lg:w-[500]">
      <p className="font-medium text-lg lg:text-xl mb-2">Cart Summary</p>

      <div className="w-full border border-gray-200 pl-4 lg:pl-6 shadow-sm rounded-md">
        {/* ===== Products Scroll Area ===== */}
        <div className="max-h-[400] lg:max-h-[565] px-2 overflow-y-auto custom-scroll">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="w-full border-b border-gray-300 flex gap-4 lg:gap-6 py-4 lg:py-6"
            >
              {/* Image */}
              <div className="flex flex-col items-center">
                <Image
                  src="/images/orange.png"
                  alt="orange"
                  width={70}
                  height={70}
                  className="object-cover"
                />
                <div className="bg-[#0E1112] text-[11px] text-center rounded-tl-[15px] rounded-br-[15px] px-2">
                  <p className="text-[#F7FCFF]">In Stock</p>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1">
                <p className="font-normal text-base lg:text-lg">
                  Premium Organic Orange - 1KG
                </p>

                <div className="flex justify-between  items-center pt-3 gap-3 w-full">
                  {/* Quantity */}
                  <div className={`${quantity === 1 ? "hidden" : ""}`}>
                    <div className="flex items-center border border-gray-200 gap-3 px-3 py-1 rounded-xl">
                      <Trash className="w-4 h-4 cursor-pointer" />
                      <p className="font-normal text-sm sm:text-base">1</p>
                      <Plus className="w-4 h-4 cursor-pointer" />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="font-medium text-sm sm:text-base lg:text-xl md:mr-20 mr-10">
                    £ 20
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Total Section ===== */}
        <div className={`${total === 1 ? "hidden" : ""}`}>
          <div className="py-4 pr-4 lg:pr-7">
            <p className="text-[#014162] font-medium text-lg lg:text-xl">
              Total Amount
            </p>

            <div className="flex flex-col gap-2 pt-4 pb-3 border-b border-gray-200">
              <div className="flex justify-between">
                <p className="text-[#6B6F75] text-sm lg:text-lg">Subtotal</p>
                <p className="text-[#6B6F75] text-sm lg:text-lg">£ 555.45</p>
              </div>

              <div className="flex justify-between">
                <p className="text-[#6B6F75] text-sm lg:text-lg">Shipping</p>
                <p className="text-[#6B6F75] text-sm lg:text-lg">£ 25</p>
              </div>
            </div>

            <div className="flex justify-between pt-3">
              <p className="font-medium text-base lg:text-lg">Total</p>
              <p className="text-base lg:text-lg font-normal">£ 580.45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
