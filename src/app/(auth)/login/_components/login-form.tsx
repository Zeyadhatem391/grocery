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
import { loginSchema } from "@/lib/schemas/login";
import { Button } from "@/components/ui/Button";

export default function LoginForm() {
  // ^ react-hook-form
  const form = useForm({
    mode: "onSubmit",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //   ^ function
  const onSubmit: SubmitHandler = (data) => {
    console.log("Login data:", data);
  };

  return (
    <Form {...form}>
      <form
        action=""
        className=" w-full "
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className=" *:w-full space-y-6">
          <div className="space-y-6">
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
                      placeholder="Sarahem@gmail.com"
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

            {/* forget password button */}
            <div className="flex items-center justify-start w-full -mt-2">
              <Link href="/forgot-password" className="text-md font-semibold text-maroon-700">
                Forgot Password ?
              </Link>
            </div>
          </div>

          {/* submit button */}
          <Button
            disabled={form.formState.isSubmitting}
            className=""
          >
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
}
