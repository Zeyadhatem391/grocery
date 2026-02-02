export type OrderItem = {
  item_id: string;
  item_name: string;
  quantity: number;
  price: number;
  image: string; // ✅ image URL for rendering in UI
};

type Order = {
  id: string;
  order_number: string;
  payment_method: string;
  delivery_type: string;
  status: "Pending" | "Delivered" | "Cancelled";
  date: string;
  items: OrderItem[];
  total: number;
};

export const mockOrders: Order[] = [
  {
    id: "ORD-2001",
    order_number: "20260130-GROC1",
    payment_method: "Credit Card",
    delivery_type: "Home Delivery",
    status: "Delivered",
    date: "2026-01-25T10:30:00Z",
    items: [
      {
        item_id: "ITEM-101",
        item_name: "Bananas",
        quantity: 6,
        price: 0.5,
        image: "/banana.svg",
      },
      {
        item_id: "ITEM-102",
        item_name: "Milk (1L)",
        quantity: 2,
        price: 1.2,
        image: "/milk.svg",
      },
      {
        item_id: "ITEM-103",
        item_name: "Brown Bread",
        quantity: 1,
        price: 2.5,
        image: "/bread.svg",
      },
    ],
    total: 0,
  },
  {
    id: "ORD-2002",
    order_number: "20260128-GROC2",
    payment_method: "Cash on Delivery",
    delivery_type: "Pickup",
    status: "Pending",
    date: "2026-01-28T14:00:00Z",
    items: [
      {
        item_id: "ITEM-104",
        item_name: "Apples (1kg)",
        quantity: 1,
        price: 3.0,
        image: "/apples.svg",
      },
      {
        item_id: "ITEM-105",
        item_name: "Eggs (12 pack)",
        quantity: 1,
        price: 2.8,
        image: "/eggs.svg",
      },
    ],
    total: 0,
  },
  {
    id: "ORD-2003",
    order_number: "20260120-GROC3",
    payment_method: "PayPal",
    delivery_type: "Home Delivery",
    status: "Cancelled",
    date: "2026-01-20T09:00:00Z",
    items: [
      {
        item_id: "ITEM-106",
        item_name: "Cheddar Cheese (200g)",
        quantity: 1,
        price: 4.5,
        image: "/cheese.svg",
      },
      {
        item_id: "ITEM-107",
        item_name: "Tomatoes (1kg)",
        quantity: 2,
        price: 2.0,
        image: "/tomato.svg",
      },
    ],
    total: 0,
  },
];
