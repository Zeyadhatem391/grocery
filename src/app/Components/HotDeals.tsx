"use client";
import { useState, useEffect } from "react";

export default function HotDeals() {
    const [products, setProducts] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const Data = await fetch("https://dummyjson.com/products");
            const res = await Data.json();
            setProducts(res.products);
        };
        fetchData();
    }, []);

    return (
        <div className="mt-10 px-8 ">
            <p className="text-[#253D4E] text-[32px] font-semibold">
                Hot Deals
            </p>

            {products.map((item: any) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
}
