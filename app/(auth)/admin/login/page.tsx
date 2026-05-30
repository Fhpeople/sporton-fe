"use client";

import Button from "@/app/(landing)/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { push } = useRouter();
  return (
    <main className="bg-[#F7F9FA] w-full min-h-screen flex justify-center items-center">
      <div className="w-[420px] bg-white rounded-xl border-t-4 border-primary py-8 px-10">
        <Image
          src="/images/logo-admin.svg"
          alt="logo admin"
          width={180}
          height={32}
          className="mx-auto mb-3"
        />
        <p className="opacity-50 text-xs text-center mb-6">
          Enter your credentials to access the dashboard
        </p>

        <div className="input-group-admin mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Please type your email"
            className="rounded-md!"
          />
        </div>
        <div className="input-group-admin mb-6">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••••••••••••••"
            className="rounded-md!"
          />
        </div>
        <Button
          className="w-full rounded-md! mb-4"
          onClick={() => push("/admin/products")}
        >
          Sign In
        </Button>
      </div>
    </main>
  );
};

export default LoginPage;