export async function GET() {
  // test
}

export async function getOrderHistory() {
  const response = await fetch(`${process.env.API_BASE_URL}/api/orders`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch order history");
  }
  const data = await response.json();
  return data;
}
