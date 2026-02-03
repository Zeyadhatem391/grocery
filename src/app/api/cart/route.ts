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
