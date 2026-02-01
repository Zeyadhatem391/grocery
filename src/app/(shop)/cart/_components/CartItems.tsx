import CartItem from "./CartItem";
import { products } from "../data/products";

export default function CartItems() {
  return (
    <div className="border border-zinc-700 rounded-xl p-4 max-h-[520px] overflow-y-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <>
            <CartItem key={product.id} product={product} />
          </>
        ))}
      </div>
    </div>
  );
}
