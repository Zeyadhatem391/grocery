"use client";

import Image from "next/image";
import { useState } from "react";
import FramerHotDealsButton from "./FramerHotDealsButton";

export default function HotDealsClient({
    products,
    categories,
}: {
    products: any[];
    categories: string[];
}) {
    const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

    const filteredProducts = products.filter(
        (item) => item.category.name === activeCategory,
    );

    return (
        <div className="flex flex-col gap-5 lg:px-24 md:px-16 px-4 mt-10">
            <div className="flex gap-3 md:justify-end justify-center flex-wrap">
                {categories.map((cat) => (
                    <h2
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`cursor-pointer hover:text-[#014162F2] ${
                            activeCategory === cat
                                ? "text-[#014162F2] font-semibold"
                                : ""
                        }`}
                    >
                        {cat}
                    </h2>
                ))}
            </div>

            <div className="flex md:flex-row flex-col gap-4">
                {filteredProducts.slice(0, 5).map((item: any) => (
                    <div
                        key={item.id}
                        className="md:w-1/4 w-full cursor-pointer"
                    >
                        <div className="border-2 border-gray-200">
                            <Image
                                src={item.image_url}
                                alt={item.title}
                                width={250}
                                height={250}
                                className="object-cover w-full h-50"
                            />

                            <div className="p-3">
                                <p className="text-gray-400">
                                    {item.category.name}
                                </p>

                                <h2 className="text-[#014162F2] text-xl">
                                    {item.title}
                                </h2>

                                <div className="flex justify-between items-center">
                                    {item.discount_price ? (
                                        <div className="flex gap-2 items-center">
                                            <strong className="text-[#014162F2] text-lg">
                                                £{item.discount_price}
                                            </strong>
                                            <del className="text-gray-400 text-sm">
                                                £{item.price}
                                            </del>
                                        </div>
                                    ) : (
                                        <div className="flex gap-2">
                                            <strong className="text-[#014162F2]">
                                                £{item.price}
                                            </strong>
                                        </div>
                                    )}
                                    <FramerHotDealsButton />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
