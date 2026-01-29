import Image from "next/image";
import FramerHotDealsButton from "./FramerHotDealsButton";
export default async function HotDeals() {
    const AllResponse = await fetch(`${process.env.BASE_URL}/api/meals/hot`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
        cache: "no-store",
    });

    const AllData = await AllResponse.json();

    const DeterminedData = AllData.data.slice(0, 5);
    console.log(AllData);
    const renderedCategories: string[] = [];

    return (
        <div className="flex flex-col gap-5 lg:px-24 md:px-16 px-4 mt-10">
            <div className="flex gap-3 md:justify-end justify-center flex-wrap">
                {AllData.data.map((item: any) => {
                    if (renderedCategories.includes(item.category.name)) return;
                    renderedCategories.push(item.category.name);

                    return (
                        <h2 className="cursor-pointer hover:text-[#014162F2]" key={item.category.name}>
                            {item.category.name}
                        </h2>
                    );
                })}
            </div>
            <div className="flex md:flex-row flex-col gap-4">
                {DeterminedData.map((item: any) => (
                    <div key={item.id} className="md:w-1/4 w-full h-100 cursor-pointer">
                        {item.image_url && (
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
                                    <div className="flex items-center gap-1">
                                        <p className="text-gray-500 font-extralight">
                                            By{" "}
                                        </p>
                                        <strong className="text-[#014162F2]">
                                            Mr.food
                                        </strong>
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
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
