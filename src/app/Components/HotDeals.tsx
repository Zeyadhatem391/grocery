import HotDealsClient from "./CsrHotDeals";

export default async function HotDeals() {
    const res = await fetch(`${process.env.BASE_URL}/api/meals/hot`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
        cache: "no-store",
    });

    const data = await res.json();

    return (
        <HotDealsClient
            products={data.data}
            categories={Array.from(
                new Set(data.data.map((item: any) => item.category.name))
            )}
        />
    );
}
