import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative w-full ">
            <Image
                src="/herobg.png"
                alt="hero"
                fill
                className="object-cover"
                
            />

            <div className="absolute inset-0 bg-[#014162F2]"></div>

            <div className="relative md:flex grid h-full items-center justify-between text-white">
                <div className="lg:ms-24 py-18 flex flex-col items-start">
                    <h1 className="md:text-4xl text-2xl md:w-9/12 w-full font-bold mb-4">
                        Don’t miss our daily amazing deals.
                    </h1>
                    <p className="text-lg mb-6">
                        Save up to 60% off on your first order
                    </p>
                    <button className="rounded-lg bg-[#D9D9D9] px-15 py-3 text-black">
                        Shop Now
                    </button>
                </div>
                <Image className="lg:w-4/12" src="/heroimg.png" alt="hero" width={400} height={400} />
            </div>
        </div>
    );
}
