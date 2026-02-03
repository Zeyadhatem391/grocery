import { useQuery } from "@tanstack/react-query";

async function getCart() {
  //   const token = `43|knbBZ7QjQ7Rg8aFnGDGrVsw3DwFOGC8Vqw6uaUXJ19aab0c5`;
  const response = await fetch(
    `https://grocery.newcinderella.online/api/cart`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer 52|xrx5gsjCWMQMuLmSaevKHsxH140qWySp4lkZOtqO7f985009`,
      },
    },
  );

  const payload = await response.json();
  return payload;
}

export const useCart = () => {
  return useQuery({
    queryKey: ["my-cart-items"],
    queryFn: () => getCart(),
  });
};
