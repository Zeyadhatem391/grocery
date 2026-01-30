"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormItem,
  FormLabel,
  Form,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/Button";
import { registerSchema } from "@/lib/schemas/register";

export default function RegisterForm() {
  // ^ react-hook-form
  const form = useForm({
    mode: "onSubmit",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  //   ^ function
  const onSubmit: SubmitHandler = (data) => {
    console.log("Register data:", data);
  };

  return (
    <Form {...form}>
      <form
        action=""
        className="w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className=" *:w-full space-y-6">
          <div className="space-y-4">

            {/* username input */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* email input */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="user@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* phone input */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="01012345678"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* password input */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="*********"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* remember me */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2 h-4 w-4 text-maroon-700 focus:ring-maroon-700 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="text-zinc-800 font-semibold">
                  Remember me
                </label>
              </div>
            </div>
          </div>

          {/* submit button */}
          <Button disabled={form.formState.isSubmitting} className=" h-10">
            Register
          </Button>
        </div>
      </form>
    </Form>
  );
}
