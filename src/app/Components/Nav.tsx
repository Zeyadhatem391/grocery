import Image from "next/image";
import {
    House,
    LayoutGrid,
    ChevronDown,
    Search,
    ShoppingCart,
    User,
    Bell,
} from "lucide-react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Nav() {
    return (
        <nav className="flex md:justify-center justify-between items-center gap-8 rounded-md py-4 px-8 ">
            <Image
                className="cursor-pointer md:block hidden"
                src="/Logo.png"
                alt="logo"
                width={100}
                height={100}
            />
            <div className="md:hidden self-start text-start flex gap-5 items-center ">
                <Image
                    className="cursor-pointer "
                    src="/MobileScreenLogo.png"
                    alt="logo"
                    width={27}
                    height={27}
                />
                <div className="cursor-pointer relative mt-1">
                    <span className="bg-red-600 w-2 h-2 rounded-full absolute top-0 right-0"></span>
                    <Bell className="text-[#014162F2]" />
                </div>
            </div>
            <div className=" w-full max-w-48 md:hidden block">
                <Select>
                    <SelectTrigger className="w-full max-w-48">
                        <SelectValue placeholder="Villa 14, Street 23, District 5, New Cairo, Cairo" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Label</SelectLabel>
                            <SelectItem value="choise1">choise1</SelectItem>
                            <SelectItem value="choise2">choise2</SelectItem>
                            <SelectItem value="choise3">choise3</SelectItem>
                            <SelectItem value="choise4">choise4</SelectItem>
                            <SelectItem value="choise5">choise5</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <ShoppingCart className="text-end" />
            <div className="md:flex gap-1 hidden cursor-pointer ">
                <House />
                <p>Home</p>
            </div>
            <div className="md:flex gap-1 hidden cursor-pointer ">
                <LayoutGrid />
                <p>Categories</p>
            </div>
            <div className="lg:flex hidden items-center ">
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
                <div className="p-3 cursor-pointer rounded-e-lg bg-[#014162] md:block hidden">
                    <Search className="text-white " />
                </div>
            </div>
            <div className="md:flex gap-1 hidden items-center cursor-pointer ">
                <div className="relative">
                    <ShoppingCart className="text-gray-300" />
                    <span className="absolute -top-2 -right-2 bg-gray-300 text-white rounded-full w-5 h-5 flex justify-center items-center">
                        3
                    </span>
                </div>
                <p>My Cart</p>
            </div>
            <div className="bg-[#014162] cursor-pointer rounded-lg p-2 md:flex gap-1 hidden ">
                <User className="text-white" />
                <p className="text-white">Sarah's Profile</p>
            </div>
        </nav>
    );
}
