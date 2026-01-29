"use client";

import LoginForm from "./_components/login-form";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-10 max-w-md mx-auto">
      {/* Header */}
      <h1 className="text-maroon-700 text-3xl -ml-17 font-semibold  max-w-sm w-full">
        Login your account!
      </h1>
      <span className="text-zinc-800 font-bold text-md block -ml-64 -mt-3">Welcome to Grocery Plus</span>

      {/* login form */}
      <LoginForm />

      {/* login with google and Facebook */}
      <div className="flex items-center justify-center w-full flex-col gap-4">
        <span className="">Continue In With</span>
        <div className="flex items-center justify-center gap-3 w-full">
          <button className="flex items-center justify-center gap-2 p-2 rounded-md bg-blue-100 hover:bg-blue-200/50 cursor-pointer transition">
            <FcGoogle className="size-6" />
            <span className="text-gray-700 font-medium">
              Continue with google
            </span>
          </button>
          <button className="flex items-center justify-center gap-2 p-2 rounded-md bg-blue-100 hover:bg-blue-200/50 cursor-pointer transition">
            <FaFacebook className="size-6 text-blue-500" />
            <span className="text-gray-700 font-medium">
              Continue with Facebook
            </span>
          </button>
        </div>
      </div>

      {/* footer */}
      <footer>
        <p className="text-zinc-800 font-bold max-w-sm w-full">
          Don't have any Account? 
          <Link href={"/register"} className="text-blue-800">
             Register
          </Link>
        </p>
      </footer>
    </div>
  );
}
