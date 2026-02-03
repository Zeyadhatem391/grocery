"use client";
import { useState } from "react";
import Image from "next/image";
import { Plus, Wallet } from "lucide-react";
import { formatCard } from "@/lib/utils/helperFn";


//MOCK DATA FOR PRESENTATIONAL PURPOSES
const cardLogos: Record<string, string> = {
  visa: "/visa.svg",
  mastercard: "/mastercard.svg",
};
//MOCK DATA FOR PRESENTATIONAL PURPOSES
const paymentCards = [
  {
    id: "1",
    type: "visa",
    number: "1524365478544242",
    expiry: "12/25",
  },
  {
    id: "2",
    type: "mastercard",
    number: "5214652385478888",
    expiry: "08/26",
    
  },
];
//MOCK DATA FOR PRESENTATIONAL PURPOSES
const otherMethods = [
  {
    id: "cash",
    label: "Cash On Delivery",
    sub: "Pay when you receive your order",
  },
  { id: "google", label: "Google Pay", sub: "Quick checkout with Google Pay" },
  { id: "apple", label: "Apple Pay", sub: "Quick checkout with Apple Pay" },
  { id: "wallet", label: "Wallet Pay", sub: "Digital wallet payment" },
];

function PaymentSelector() {
  const [selectedId, setSelectedId] = useState("1"); // Default to the Mastercard

  return (
    <div className="flex gap-8">
      {/* Left Column: Saved Cards */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-4">Saved Cards</h3>
        <div className="space-y-3">
          {paymentCards.map((card) => (
            <button
              key={card.id}
              onClick={() => setSelectedId(card.id)}
              className={`w-full flex items-center cursor-pointer p-4 rounded-xl border-2 transition-all
                ${
                  selectedId === card.id
                    ? "border-slate-800 bg-white shadow-sm"
                    : " bg-white/50 hover:border-slate-200"
                }`}
            >
              <div className="w-12 h-8 bg-slate-100 rounded mr-4 flex items-center justify-center">
                {/* Replace with actual SVGs for Visa/Mastercard */}
                <Image
                  src={cardLogos[card.type]}
                  alt={card.type}
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-left">
                <p className="font-medium">{formatCard(card)}</p>
                <p className="text-xs text-slate-500">Expires {card.expiry}</p>
              </div>
            </button>
          ))}

          {/* Add New Card Action */}
          <button className="w-full cursor-pointer flex items-center p-4 rounded-xl border-2 border-dashed border-slate-300 text-slate-600 hover:bg-slate-50 transition-colors">
            <Plus size={20} className="mr-4" />
            <span className="font-medium">Add New Card</span>
          </button>
        </div>
      </div>

      {/* Right Column: Other Methods */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-4">Other Payment Methods</h3>
        <div className="space-y-3">
          {otherMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedId(method.id)}
              className={`w-full flex items-center p-4 cursor-pointer rounded-xl border-2 transition-all
                ${
                  selectedId === method.id
                    ? "border-slate-800 bg-white"
                    : " bg-white/50 hover:border-slate-200"
                }`}
            >
              <Wallet size={20} className="mr-4 text-slate-600" />
              <div className="text-left">
                <p className="font-medium">{method.label}</p>
                <p className="text-xs text-slate-500">{method.sub}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaymentSelector;
