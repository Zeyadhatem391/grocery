import { Input } from "@/components/ui/input";
import {
  ReceiptIndianRupee,
  ArrowUpWideNarrow,
  Star,
  ChevronRight,
} from "lucide-react";

import CartSummary from "../../components/CartSummary";

export default function OrderSummary() {
  return (
    <section className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-24 mt-10 px-4 sm:px-0">
      {/* ================= Cart Summary ================= */}
      <CartSummary quantity={1} total={0} />

      {/* ================= Order Options ================= */}
      <div className="w-full lg:w-[420] flex flex-col">
        <p className="font-medium text-xl mb-2">Order Options</p>

        <div className="w-full border border-gray-200 shadow-sm rounded-xl px-4 sm:px-6 py-5 flex flex-col gap-5">
          {/* Delivery Address */}
          <div className="flex flex-col gap-2">
            <label className="text-lg">Delivery Address</label>
            <Input placeholder="Villa 14, Street 23, District 5, New Cairo" />
          </div>

          {/* Schedule Delivery / buttons */}
          <div className="flex  justify-between gap-3 mt-5">
            <button
              type="button"
              className="bg-[#BCB8B1] gap-2 text-[#014162] font-normal  justify-center"
            >
              <ReceiptIndianRupee />
              Download Receipt
            </button>

            <button
              type="button"
              className="bg-[#BCB8B1] gap-2 text-[#014162] font-normal  justify-center"
            >
              <ArrowUpWideNarrow />
              Reorder
            </button>
          </div>

          {/* Rating / Experience */}
          <div className="flex flex-col mt-5">
            <p className="text-lg mb-2">How Was Your Experience</p>
            <div className="flex py-2 gap-1">
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
            </div>
            <Input placeholder="Leave a comment..." className="mt-3" />
          </div>

          {/* Special Offer Code */}
          <div className="pt-5 w-full sm:w-1/2">
            <p className="font-medium text-xl mb-4">Special Offer Code</p>

            <div className="border p-3 rounded-xl space-y-3 flex flex-col">
              <p className="text-[#014162] text-lg font-normal">Offer Code</p>
              <div className="flex gap-3">
                <Input placeholder="Enter code" className="flex-1" />
              </div>

              <button className="bg-[#014162] text-[#F7FCFF] w-full flex justify-center gap-2">
                Shop Now
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
