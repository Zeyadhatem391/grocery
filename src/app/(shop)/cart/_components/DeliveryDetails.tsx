"use client";
import { useState } from "react";
export default function DeliveryDetails() {
  const [address, setAddress] = useState(
    "Villa 14, Street 23, District 5, New Cairo, Cairo",
  );
  return (
    <>
      <div className="grid grid-cols-1">
        <h3 className="text-lg font-semibold">Delivery Details & Promo Code</h3>
        <div className="border border-zinc-700 rounded-xl p-6  space-y-4 w-178">
          <div className="flex gap-3">
            <input
              className="flex-1 bg-900 border border-zinc-700 rounded-lg px-3 py-2"
              placeholder="Save10"
            />
            <button className="bg-zinc-200 text-black px-4 rounded-lg">
              Apply Code
            </button>
          </div>

          <div className="flex gap-3">
            <input
              className="flex-1 bg-900 border border-zinc-700 rounded-lg px-3 py-2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button className="bg-zinc-200 text-black px-4 rounded-lg">
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
