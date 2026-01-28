import Image from "next/image";
import {
    House,
    LayoutGrid,
    ChevronDown,
    Search,
    ShoppingCart,
    User,
} from "lucide-react";

export default function Nav() {
    return (
        <nav className="flex justify-center items-center gap-5 rounded-md py-4 px-8">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
            <div className="md:flex gap-1 hidden">
                <House />
                <p>Home</p>
            </div>
            <div className="md:flex gap-1 hidden">
                <LayoutGrid />
                <p>Categories</p>
            </div>
            <div className="md:flex hidden items-center">
                <div className="flex gap-5 bg-[#D9D9D9] rounded-s-lg p-3">
                    <div className="cursor-pointer flex gap-1 jucestify-center items-center">
                        All Categories
                        <ChevronDown />
                    </div>
                    <input
                        className="border-0 outline-0"
                        type="text"
                        placeholder="Search For Items...."
                    />
                </div>
                <div className="p-3 rounded-e-lg bg-[#014162] md:block hidden">
                    <Search className="text-white " />
                </div>
            </div>
            <div className="md:flex gap-1 hidden items-center">
                <div className="relative">
                    <ShoppingCart className="text-gray-300" />
                    <span className="absolute -top-2 -right-2 bg-gray-300 text-white rounded-full w-5 h-5 flex justify-center items-center">3</span>
                </div>
                <p>My Cart</p>
            </div>
            <div className="bg-[#014162] rounded-lg p-2 md:flex gap-1 hidden">
                <User className="text-white" />
                <p className="text-white">Sarah's Profile</p>
            </div>
        </nav>
    );
}
