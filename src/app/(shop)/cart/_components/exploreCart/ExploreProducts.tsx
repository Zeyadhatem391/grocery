import Image from "next/image";
import { Star } from "lucide-react";

type ExploreProduct = {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  stock: boolean;
  badge: string[];
};

export default function ExploreCard({ product }: { product: ExploreProduct }) {
  return (
    <div className="min-w-[260px] border rounded-xl p-4 bg-white">
      {/* Badges */}
      <div className="flex gap-2 mb-2">
        {product.badge.map((b) => (
          <span
            key={b}
            className="text-xs px-2 py-1 rounded bg-slate-700 text-white"
          >
            {b}
          </span>
        ))}
      </div>

      {/* Image */}
      <div className="relative h-40 flex justify-center">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>

      {/* Name */}
      <h4 className="mt-3 text-sm font-medium">{product.name}</h4>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-1 text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            fill={i < Math.round(product.rating) ? "currentColor" : "none"}
          />
        ))}
        <span className="text-xs text-gray-400">({product.rating}/5)</span>
      </div>

      {/* Price */}
      <div className="flex gap-2 items-center mt-2">
        <span className="font-semibold">£ {product.price}</span>
        {product.oldPrice && (
          <span className="text-sm text-gray-400 line-through">
            £ {product.oldPrice}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 mt-4">
        <button className="flex-1 bg-slate-800 text-white py-2 rounded-lg text-sm">
          Add To Cart
        </button>

        <div className="flex items-center gap-2 border rounded-lg px-2">
          <button>🗑</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}
