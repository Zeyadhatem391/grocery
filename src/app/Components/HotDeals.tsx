import HotDealsClient from "./CsrHotDeals";

export default async function HotDeals() {
    const res = await fetch(`${process.env.BASE_URL}/api/meals`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
        next: { revalidate: 15 },
    });
    const categoryRes = await fetch(`${process.env.BASE_URL}/api/categories`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
        next: { revalidate: 15 },
    });
    const data = await res.json();
    const categoryData = await categoryRes.json();

    return (
        <HotDealsClient
            products={data.data}
            categoriesData={categoryData.data}
            categories={Array.from(
                new Set(data.data.map((item: any) => item.category.name)),
            )}
        />
    );
}
