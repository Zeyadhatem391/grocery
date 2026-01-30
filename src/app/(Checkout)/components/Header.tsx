// import {
//   House,
//   LayoutGrid,
//   Search,
//   ChevronDown,
//   ShoppingCart,
//   User,
//   LogIn,
// } from "lucide-react";
// import Image from "next/image";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export default function Header() {
//   return (
//     <header className="w-full h-20 bg-[#F7FCFF] px-8 flex items-center gap-6 justify-center shadow-sm">
//       {/* ==== Logo ==== */}
//       <div>
//         <Image
//           src="/images/Vector.png"
//           alt="orange"
//           width={130}
//           height={100}
//           className="object-cover"
//         />
//       </div>
//       {/* ==== Navigation ==== */}
//       <nav>
//         <ul className="hidden md:flex gap-6">
//           <li className="flex items-center gap-2 text-base font-medium text-[#141212] cursor-pointer">
//             <House className="w-5 h-5" />
//             Home
//           </li>
//           <li className="flex items-center gap-2 text-base font-medium text-[#141212] cursor-pointer">
//             <LayoutGrid className="w-5 h-5" />
//             Categories
//           </li>
//         </ul>
//       </nav>

//       {/* ==== Search Bar ==== */}
//       <div className="hidden md:flex items-center w-[497] h-[42] bg-[#D9D9D9] rounded-2xl overflow-hidden">
//         <div className="flex items-center gap-1 px-3 text-sm font-semibold text-[#141212] border-r">
//           All Categories
//           <ChevronDown className="w-4 h-4" />
//         </div>

//         <div className="flex-1">
//           <Input
//             placeholder="Search for items..."
//             className="h-[42] border-0 rounded-none bg-transparent focus-visible:ring-0"
//           />
//         </div>

//         <Button className="w-[52] h-[42] rounded-none bg-[#014162] hover:bg-[#01324a]">
//           <Search className="w-5 h-5 text-white" />
//         </Button>
//       </div>

//       {/* ==== Cart ==== */}
//       <div className="hidden md:flex items-center gap-2 text-[#000016] cursor-pointer">
//         <ShoppingCart className="w-6 h-6" />
//         <p className="font-normal">My cart</p>
//       </div>

//       {/* ==== Profile Button ==== */}
//       <Button className="bg-[#014162] hover:bg-[#01324a] rounded-sm hidden md:flex gap-2 px-4">
//         <User className="w-5 h-5" />
//         Sarah’s Profile
//       </Button>

//       {/* ==== Sign Up ==== */}
//       <div className="hidden">
//         <Button
//           variant="outline"
//           className="rounded-2xl flex gap-2 px-4 border-[#014162] text-[#014162] hover:bg-[#014162] hover:text-white "
//         >
//           <LogIn className="w-5 h-5" />
//           Sign up
//         </Button>
//       </div>
//     </header>
//   );
// }

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
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full h-16 sm:h-20 bg-[#F7FCFF] px-4 sm:px-8 flex items-center justify-between shadow-sm">
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
      <div className="hidden md:flex items-center w-[350] lg:w-[497] h-[42] bg-[#D9D9D9] rounded-2xl overflow-hidden">
        <div className="flex items-center gap-1 px-3 text-sm font-semibold text-[#141212] border-r">
          All Categories
          <ChevronDown className="w-4 h-4" />
        </div>

        <div className="flex-1">
          <Input
            placeholder="Search for items..."
            className="h-[42] border-0 rounded-none bg-transparent focus-visible:ring-0"
          />
        </div>

        <Button className="w-[52] h-[42] rounded-none bg-[#014162] hover:bg-[#01324a]">
          <Search className="w-5 h-5 text-white" />
        </Button>
      </div>

      {/* ==== Right Section ==== */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* ==== Mobile Search Icon ==== */}
        <div className="md:hidden">
          <Search className="w-6 h-6 cursor-pointer" />
        </div>

        {/* ==== Cart ==== */}
        <div className="flex items-center gap-2 text-[#000016] cursor-pointer">
          <ShoppingCart className="w-6 h-6" />
          <p className="font-normal hidden sm:block">My cart</p>
        </div>

        {/* ==== Profile Button ==== */}
        <Button className="bg-[#014162] hover:bg-[#01324a] rounded-sm hidden md:flex gap-2 px-4">
          <User className="w-5 h-5" />
          Sarah’s Profile
        </Button>

        {/* ==== Mobile Profile Icon ==== */}
        <div className="md:hidden">
          <User className="w-6 h-6 cursor-pointer" />
        </div>

        {/* ==== Sign Up (hidden now as original) ==== */}
        <div className="hidden">
          <Button
            variant="outline"
            className="rounded-2xl flex gap-2 px-4 border-[#014162] text-[#014162] hover:bg-[#014162] hover:text-white "
          >
            <LogIn className="w-5 h-5" />
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
