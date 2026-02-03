"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import FramerHotDealsButton from "./FramerHotDealsButton";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import { Star } from "lucide-react";

export default function HotDealsClient({
    products,
    categories,
    categoriesData,
}: {
    products: any[];
    categories: string[];
    categoriesData: any[];
}) {
    const [activeCategory, setActiveCategory] = useState<string>(
        categories[0] ?? "",
    );
    const [activeCategoryMobileScreen, setActiveCategoryMobileScreen] =
        useState<string | null>(null);
    const [size, setSize] = useState<"large" | "small">("large");

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth < 768 ? "small" : "large");
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const filteredProducts = products.filter(
        (item) => item.category.name === activeCategory,
    );
    const filteredProductsMobileScreen = products.filter(
        (item) => item.category.name === activeCategoryMobileScreen,
    );

    return size === "large" ? (
        <div className="flex flex-col gap-5 lg:px-24 md:px-16 px-4 mt-10">
            {/* Categories */}
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

            {/* Products */}
            <div className="flex md:flex-row flex-col gap-4">
                {filteredProducts.slice(0, 5).map((item: any) => (
                    <div
                        key={item.id}
                        className="md:w-6/12 lg:w-3/12 w-full cursor-pointer"
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

                                <div className="flex gap-1 w-2/3">
                                    {Array.from({ length: 5 }).map(
                                        (_, index) => (
                                            <Star
                                                key={index}
                                                className={
                                                    index <
                                                    Math.round(item.rating)
                                                        ? "fill-yellow-400 text-yellow-400"
                                                        : "text-gray-300"
                                                }
                                            />
                                        ),
                                    )}
                                    <p>({item.rating_count})</p>
                                </div>

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
                                        <strong className="text-[#014162F2]">
                                            £{item.price}
                                        </strong>
                                    )}

                                    <FramerHotDealsButton />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        // Mobile Screen
        <div className="px-4 mt-10">
            <h2 className="text-start font-bold pb-4 text-[#014162F2] ">
                Category
            </h2>
            <Carousel>
                <CarouselContent className="flex gap-3">
                    {categoriesData.map((cat) => (
                        <CarouselItem
                            key={cat.id}
                            onClick={() =>
                                setActiveCategoryMobileScreen(cat.name)
                            }
                            className={`cursor-pointer rounded-2xl hover:text-[#014162F2] flex flex-col justify-between text-xs p-3 border border-gray-300 basis-3/12 ${
                                activeCategoryMobileScreen === cat.name
                                    ? "text-[#014162F2] bg-gray-100 font-semibold"
                                    : ""
                            }`}
                        >
                            <Image
                                className="rounded-2xl w-full h-15 object-cover"
                                src={cat.image_url}
                                alt={cat.name}
                                width={100}
                                height={100}
                            />
                            <button>{cat.name}</button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="flex gap-3 flex-wrap mt-4">
                <div className="flex gap-3 items-start w-full mt-4">
                    {filteredProductsMobileScreen.map((product: any) => (
                        <div key={product.id} className="w-6/12 border ">
                            <Image
                                src={product.image_url}
                                alt={product.title}
                                width={100}
                                height={100}
                                className="object-cover rounded h-30 w-full"
                            />
                            <div className="px-2 pb-1 flex flex-col">
                                <div className="flex justify-between">
                                    <h2 className="font-bold text-sm">
                                        {product.title}
                                    </h2>
                                    <p>({product.size})</p>
                                </div>
                                <div className="flex gap-1 ">
                                    {Array.from({ length: 5 }).map(
                                        (_, index) => (
                                            <Star
                                                key={index}
                                                className={
                                                    index <
                                                    Math.round(product.rating)
                                                        ? "fill-yellow-400 text-yellow-400"
                                                        : "text-gray-300"
                                                }
                                            />
                                        ),
                                    )}
                                    <p>({product.rating_count})</p>
                                </div>
                                {product.discount_price ? (
                                    <div className="flex gap-2 items-center">
                                        <strong className="text-[#014162F2] text-lg">
                                            £{product.discount_price}
                                        </strong>
                                        <del className="text-gray-400 text-sm">
                                            £{product.price}
                                        </del>
                                    </div>
                                ) : (
                                    <strong className="text-[#014162F2]">
                                        £{product.price}
                                    </strong>
                                )}
                                <button className="bg-[#014162F2] text-white p-2 rounded-xl">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
