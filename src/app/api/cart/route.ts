import { NextResponse } from "next/server";

export async function GET() {

  const res = await fetch("https://grocery.newcinderella.online/api/cart", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer 52|xrx5gsjCWMQMuLmSaevKHsxH140qWySp4lkZOtqO7f985009`,
    },
    cache: "no-store",
  });

  const data = await res.json();
  return NextResponse.json(data);
}

// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/lib/auth"; //
// import { NextResponse } from "next/server";

// export async function GET(req: Request) {
 
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   // جلب التوكن من السيشن
//   const token = session.accessToken;

//   // استخدام التوكن في fetch
//   const res = await fetch("https://grocery.newcinderella.online/api/cart", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     cache: "no-store",
//   });

//   const data = await res.json();
//   return NextResponse.json(data);
// }
