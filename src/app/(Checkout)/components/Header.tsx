import {
  House,
  LayoutGrid,
  Search,
  ChevronDown,
  ShoppingCart,
  User,
  LogIn,
  Menu,
} from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
export default function Header() {
  return (
    <header className="w-full h-16 sm:h-20 bg-[#F7FCFF] px-4 sm:px-8 flex items-center justify-between md:gap-20 md:justify-center shadow-sm">
      {/* ==== Left Section ==== */}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* ==== Mobile Menu Icon ==== */}
        <div className="md:hidden">
          <Menu className="w-6 h-6 cursor-pointer" />
        </div>

        {/* ==== Logo ==== */}
        <div>
          <Image
            src="/images/Vector.png"
            alt="vector"
            width={110}
            height={90}
            className="object-contain"
            priority
          />
        </div>

        {/* ==== Navigation ==== */}
        <nav>
          <ul className="hidden md:flex gap-6">
            <li className="flex items-center gap-2 text-base font-medium text-[#141212] cursor-pointer">
              <House className="w-5 h-5" />
              Home
            </li>
            <li className="flex items-center gap-2 text-base font-medium text-[#141212] cursor-pointer">
              <LayoutGrid className="w-5 h-5" />
              Categories
            </li>
          </ul>
        </nav>
      </div>

      {/* ==== Center Section (Search) ==== */}
      <div className=" items-center  hidden md:w-[497]h-[42] lg:flex  bg-[#D9D9D9] rounded-2xl overflow-hidden">
        {/* Categories */}
        <div className="flex items-center gap-1 px-3 text-xs sm:text-sm font-semibold text-[#141212] border-r border-gray-300 cursor-pointer">
          <span className="hidden sm:inline">All Categories</span>
          <ChevronDown className="w-4 h-4" />
        </div>

        {/* Input */}
        <div className="flex-1">
          <Input
            placeholder="Search for items..."
            className=" h-[42]  border-0  rounded-none  bg-transparent  focus-visible:ring-0 text-sm placeholder:text-gray-500"
          />
        </div>

        <button className=" w-[42] sm:w-[52] h-[42] flex items-center justify-center  bg-[#014162]  hover:bg-[#01324a] transition-colors">
          <Search className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* ==== Right Section ==== */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* ==== Mobile Search Icon ==== */}
        <div className="lg:hidden">
          <Search className="w-6 h-6 cursor-pointer" />
        </div>

        {/* ==== Cart ==== */}
        <div className="flex items-center gap-2 text-[#000016] cursor-pointer">
          <ShoppingCart className="w-6 h-6" />
          <p className="font-normal hidden sm:block">My cart</p>
        </div>

        {/* ==== Profile button ==== */}
        {/* ==== Desktop / Tablet Profile Button ==== */}
        <button className=" hidden md:flex items-center gap-2 px-1.5 py-3 bg-[#014162]  text-white rounded-xl hover:bg-[#01324a] transition-all duration-200 shadow-sm">
          <User className="w-5 h-5" />
          <span className="text-sm font-medium whitespace-nowrap">
            Sarah’s Profile
          </span>
        </button>

        {/* ==== Mobile Profile Icon ==== */}
        <button className=" md:hidden w-10 h-10 flex items-center justify-center">
          <User className="w-7 h-7" />
        </button>

        {/* ==== Sign Up (Hidden for now) ==== */}
        <div className="hidden">
          <button className=" flex items-center gap-2  px-4 py-2 rounded-xl border border-[#014162]  text-[#014162]  hover:bg-[#014162]   hover:text-white transition-all">
            <LogIn className="w-5 h-5" />
            <span className="text-sm font-medium">Sign up</span>
          </button>
        </div>
      </div>
    </header>
  );
}
