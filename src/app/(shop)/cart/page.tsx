import CartItem from "./_components/CartItem";
import { products } from "./data/products";
import CartSummary from "./_components/CartSummary";
import DeliveryDetails from "./_components/DeliveryDetails";
import MoreToExploreCart from "./_components/exploreCart/MoreToExplore";
export default function CartPage() {
  return (
    <>
      <div className="grid grid-cols-1  gap-6 pt-20 pl-50 pr-50">
        <h1 className="font-bold">Products In Cart</h1>
        <div className="max-h-[520px] overflow-y-auto border rounded-xl p-5">
          <div className="grid md:grid-cols-2 gap-6 ">
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="flex flex-1 gap-100 ">
          <CartSummary />
          <DeliveryDetails />
        </div>
      </div>
      <div className="pl-50 pr-50">
        <MoreToExploreCart />
      </div>
    </>
  );
}
