export default function CartSummary() {
  return (
    <>
      <div className="grid grid-cols-1">
        <h3 className="text-lg font-semibold">Total Amount</h3>

        <div className="border border-zinc-700 rounded-xl mt-15 p-6 space-y-3 w-100 ">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>£ 1771.45</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>£ 40</span>
            </div>

            <hr className="border-zinc-700 my-2" />

            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>£ 1811.45</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-cyan-700 py-2 rounded-lg hover:bg-cyan-600 transtion">
            Go To Checkout
          </button>
        </div>
      </div>
    </>
  );
}
