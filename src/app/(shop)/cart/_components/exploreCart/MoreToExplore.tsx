import { exploreProducts } from "../../data/ExlporeProducts";
import ExploreCard from "./ExploreProducts";

export default function MoreToExploreCart() {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold mb-4">More To Explore</h2>

      <div className="flex gap-50 overflow-x-auto pb-4 scrollbar-hide justify-center">
        {exploreProducts.map((product) => (
          <ExploreCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
