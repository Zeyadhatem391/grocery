"use client";

import Link from 'next/link';
import RegisterForm from './_components/register-form';

export default function LoginPage() {


  return <div className="flex flex-col items-center justify-center h-screen space-y-10 max-w-md mx-auto">
    {/* Header */}
    <h1 className='text-maroon-700 text-3xl -ml-19 font-semibold  max-w-sm w-full'>Create Your Account</h1>
    <span className='text-zinc-800 font-bold text-md block -ml-56 -mt-4'>Just a few things to get started</span>
    {/* register form */}
    <RegisterForm />

    {/* footer */}
    <footer>
      <p className='text-zinc-800 font-bold max-w-sm w-full'>Arealy have an Account? <Link href={'/login'} className='text-blue-800'>Login</Link></p>
    </footer>
  </div>;
}
