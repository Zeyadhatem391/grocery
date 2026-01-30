"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileCheck, Lock, Plus, BadgeCheck } from "lucide-react";

export default function PaymentMethod() {
  return (
    <section className="max-w-full sm:max-w-[1150] mx-auto my-10 shadow-xl border border-gray-200 p-4 sm:p-6 rounded-xl">
      <p className="font-medium text-lg sm:text-xl mb-4">Payment Method</p>

      {/* ===== Secure Box ===== */}
      <div className="mt-4 sm:mt-6 bg-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-3 shadow-xl rounded-lg">
        <FileCheck className="w-5 h-5 sm:w-6 sm:h-6" />
        <div className="flex items-center gap-2 sm:px-5">
          <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
          <p className="text-sm sm:text-[16px] font-normal">Secure Checkout</p>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 ml-6 sm:ml-8">
          Your information is encrypted and secure. We never store your full
          card details.
        </p>
      </div>

      {/* ===== Content ===== */}
      <div className="mt-8 sm:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12 flex-wrap">
        {/* ================= Saved Cards ================= */}
        <div className="w-full lg:w-[320px]">
          <p className="font-medium text-lg sm:text-xl mb-4">Saved Cards</p>

          {/* Card */}
          {[
            { img: "/images/visa.png", title: "Visa •••• 4242", exp: "12/25" },
            { img: "/images/master.png", title: "Mastercard •••• 8888", exp: "08/26" },
          ].map((card, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border p-3 rounded-xl mb-4 hover:border-[#014162] transition"
            >
              <Image
                src={card.img}
                alt={card.title}
                width={60}
                height={60}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-[14px] sm:text-[16px] font-normal">{card.title}</p>
                <p className="text-xs sm:text-sm text-[#6B6F75]">Expires {card.exp}</p>
              </div>
            </div>
          ))}

          {/* Add Card */}
          <Button
            variant="outline"
            className="w-full flex items-center gap-2 mb-6"
          >
            <Plus className="w-4 h-4" />
            Add New Card
          </Button>

          {/* Promo Code */}
          <div>
            <p className="text-[14px] sm:text-[16px] font-normal mb-2 flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              Promo Code
            </p>

            <div className="border p-3 rounded-xl space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <Button variant="outline" className="text-sm">
                  SAVE10
                </Button>
                <p className="text-[10px] sm:text-[12px] text-gray-500">
                  Try: SAVE10 or WELCOME20
                </p>
              </div>

              <Button className="bg-[#BCB8B1] text-[#014162] w-full">
                Apply Code
              </Button>
            </div>
          </div>
        </div>

        {/* ================= Other Payment Methods ================= */}
        <div className="w-full lg:w-[320px]">
          <p className="font-medium text-lg sm:text-xl mb-4">Other Payment Methods</p>

          {/* Method */}
          {[
            { title: "Cash on Delivery", desc: "Pay when you receive your order", link: "/images/cash.png" },
            { title: "Apple Pay", desc: "Quick checkout with Apple Pay", link: "/images/A-pay.png" },
            { title: "Google Pay", desc: "Quick checkout with Google Pay", link: "/images/G-pay.png" },
            { title: "Wallet Pay", desc: "Digital wallet payment", link: "/images/wallet.png" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border p-3 rounded-xl mb-4 hover:border-[#014162] transition"
            >
              <Image
                src={item.link}
                alt={item.title}
                width={30}
                height={30}
                className="rounded-md object-cover"
              />
              <div>
                <p className="text-[14px] sm:text-[16px] font-normal">{item.title}</p>
                <p className="text-xs sm:text-sm text-[#6B6F75]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
