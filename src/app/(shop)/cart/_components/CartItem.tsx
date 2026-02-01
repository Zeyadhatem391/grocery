import Image from "next/image";

type Product = {
  id: string;
  name: string;
  image: string;
  salary: number;
  stock: boolean;
};
export default function CartItem({ product }: { product: Product }) {
  return (
    <div className="flex items-center gap-4 py-6 px-2 ">
      {/* Image */}
      <div className="bg-white rounded-xl p-2 min-w-[70px]">
        <Image
          src={product.image.replace("/public", "")}
          alt={product.name}
          width={64}
          height={64}
          className="object-contain"
        />
        <span
          className={`bg-black text-red-50 inline-block text-xs px-2 py-1 rounded mt-1 `}
        >
          {product.stock ? "In Stock" : "Out Of Stock"}
        </span>
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="text-sm font-medium text-black-200">{product.name}</h3>

        {/* Quantity */}
        <div className="flex items-center gap-3 border border-zinc-600 rounded-lg w-fit px-3 py-1 mt-3">
          <button className="text-blue-900 text-sm">🗑</button>
          <span className="text-sm">1</span>
          <button className="text-blue-900 text-lg">+</button>
        </div>
      </div>

      {/* Price */}
      <p className="text-lg font-semibold text-black-200">£ {product.salary}</p>
    </div>
  );
}
