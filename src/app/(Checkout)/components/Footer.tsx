import { Facebook, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F7FCFF] shadow-sm mt-10 ">
      {/* Footer Details */}
      <div className="max-w-7xl mx-auto px-10 py-10 flex flex-col md:flex-row gap-2 justify-around">
        {/* Logo + Social + Info */}
        <div className="flex flex-col gap-6 md:w-1/3">
          <div>
            <Image
              src="/images/Vector.png"
              alt="vector"
              width={130}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Instagram className="w-7 h-7 cursor-pointer hover:text-[#014162]" />
            <Linkedin className="w-7 h-7 cursor-pointer hover:text-[#014162]" />
            <Facebook className="w-7 h-7 cursor-pointer hover:text-[#014162]" />
          </div>

          {/* Description */}
          <p className="text-[12px] font-normal text-[#141212]">
            Grocery platform offering fresh produce, daily essentials,
            personalized recommendations, and seamless ordering with secure
            payments and real-time tracking.
          </p>

          {/* Address & Mail */}
          <div className="flex items-center gap-2 text-[14px] text-[#141212]">
            <MapPin className="w-4 h-4" />
            5th Settlement, New Cairo, Cairo, Egypt
          </div>
          <div className="flex items-center gap-2 text-[14px] text-[#141212]">
            <Mail className="w-4 h-4" />
            help@groceryplus.com
          </div>
        </div>

        {/* Columns */}
        <div className="flex flex-wrap gap-10 md:gap-20">
          {/* Support */}
          <div className="flex flex-col gap-5">
            <p className="text-lg font-semibold text-[#141212]">Support</p>
            <p className="text-[12px] font-normal cursor-pointer hover:text-[#014162]">
              FAQ
            </p>
            <p className="text-[12px] font-normal cursor-pointer hover:text-[#014162]">
              Contact Us
            </p>
            <p className="text-[12px] font-normal cursor-pointer hover:text-[#014162]">
              Chat
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-5">
            <p className="text-lg font-semibold text-[#141212]">Services</p>
            <p className="text-[12px] font-normal cursor-pointer hover:text-[#014162]">
              Order Tracking
            </p>
            <p className="text-[12px] font-normal cursor-pointer hover:text-[#014162]">
              Smart List
            </p>
            <p className="text-[12px] font-normal cursor-pointer hover:text-[#014162]">
              Sign Up
            </p>
          </div>

          {/* Terms & Policies */}
          <div className="flex flex-col gap-5">
            <p className="text-lg font-semibold text-[#141212]">
              Terms & Policies
            </p>
            <p className="text-[12px] font-normal cursor-pointer hover:text-[#014162]">
              About Us
            </p>
            <p className="text-[12px] font-normal cursor-pointer hover:text-[#014162]">
              Terms Of Use
            </p>
            <p className="text-[12px] font-normal cursor-pointer hover:text-[#014162]">
              Privacy Policy
            </p>
            <p className="text-[12px] font-normal cursor-pointer hover:text-[#014162]">
              Return Policy
            </p>
            <p className="text-[12px] font-normal cursor-pointer hover:text-[#014162]">
              Cookies Policy
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#014162] text-white text-center py-3 text-[14px]">
        © 2025 GroceryPlus - Smart Grocery, Delivered Fast. All Rights Reserved.
      </div>
    </footer>
  );
}
