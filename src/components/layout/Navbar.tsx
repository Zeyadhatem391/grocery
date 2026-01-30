"use client";

// Icons
import {
  CircleQuestionMark,
  Crown,
  LayoutDashboard,
  ListChecks,
  MapPin,
  Package,
  Settings,
  ShieldCheck,
  User,
  Wallet,
  WalletMinimal,
} from "lucide-react";

// React
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Data
const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Personal Info",
    href: "/personal",
    icon: <User size={20} />,
  },
  {
    name: "Payment & Wallet",
    href: "/payment",
    icon: <WalletMinimal size={20} />,
  },
  {
    name: "Order History",
    href: "/order-history",
    icon: <Package size={20} />,
  },
  {
    name: "Smart Lists",
    href: "/smart-lists",
    icon: <ListChecks size={20} />,
  },
  {
    name: "Addresses",
    href: "/addresses",
    icon: <MapPin size={20} />,
  },
  {
    name: "Security & Login",
    href: "/security-login",
    icon: <ShieldCheck size={20} />,
  },
  {
    name: "Loyalty & Rewards",
    href: "/loyalty-rewards",
    icon: <Wallet size={20} />,
  },
  {
    name: "Help & Support",
    href: "/help-support",
    icon: <CircleQuestionMark size={20} />,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <Settings size={20} />,
  },
];

export default function ProfileNavigationMenu({ userData }: { userData: any }) {
  const pathname = usePathname();

  return (
    <div className="fixed w-[70px] md:w-[267px] top-0 md:top-[53px] left-0 md:left-[max(0px,calc((100vw-1140px)/2+8px))] h-screen md:h-[calc(100vh-73px)] rounded-r-lg md:rounded-lg border-r md:border border-[#dad8d8] bg-white flex flex-col transition-all duration-300 z-50">
      {/* Fixed Profile Info Section */}
      <div className="border-b border-[#e5e7eb] p-2 md:p-6 h-[80px] md:h-[140px] flex items-center justify-center md:justify-start shrink-0">
        <div className="flex items-center gap-0 md:gap-4">
          {/* Profile Image */}
          <div className="relative">
            <div className="overflow-hidden h-16 w-16 rounded-full bg-[#f3f4f6] flex items-center justify-center border-2 border-[#f7fcff]">
              {userData?.profile_image_url ? (
                <Image
                  src={userData.profile_image_url}
                  alt="Profile Image"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              ) : (
                <User size={32} className="text-[#014162]" />
              )}
            </div>
            {/* Loyalty Badge */}
            <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#f7fcff]">
              <Crown className="text-[gold]" size={24} />
            </div>
          </div>

          {/* Profile Info */}
          <div className="hidden md:flex flex-col gap-1">
            <h3 className="font-['Inter'] text-base font-semibold text-[#01050d]">
              {userData?.firstname || "Guest User"}
            </h3>
            <p className="font-['Inter'] text-base text-[#014162]">
              Gold Member
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Navigation Menu */}
      <nav className="flex-1 flex flex-col gap-2 p-3 md:p-4 overflow-y-auto scrollbar-hide">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              title={link.name}
              className={`flex h-12 items-center justify-center md:justify-start gap-0 md:gap-4 rounded px-2 md:px-4 py-1 transition-all duration-200 ${
                isActive
                  ? "bg-linear-to-b from-[#014162] to-[rgba(1,65,98,0.9)] text-white shadow-md"
                  : "bg-[#f7fcff] text-[#0e1112] hover:bg-gray-100"
              }`}
            >
              <div
                className={`flex h-6 w-6 items-center justify-center ${
                  isActive ? "text-white" : "text-[#014162]"
                }`}
              >
                {link.icon}
              </div>
              <span
                className={`hidden md:inline font-['Inter'] text-base ${
                  isActive ? "text-white font-medium" : "text-[#0e1112]"
                }`}
              >
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
