"use client";

import { getOrderHistory } from "@/app/api/test/route";
import { useState } from "react";
import { mockOrders } from "./mockOrders";
import { OrderItem } from "./mockOrders";

import { clsx } from "clsx";
import Image from "next/image";

function OrderhistoryClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [timeFilter, setTimeFilter] = useState("30");

  const calculateTotal = (items: OrderItem[]) =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filteredOrders = mockOrders.filter((order) => {
    //  Search by order_number OR any item name
    const matchesSearch =
      order.order_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.items.some((item) =>
        item.item_name.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    //  Status filter
    const matchesStatus =
      statusFilter === "all" ? true : order.status === statusFilter;

    //  Time filter
    const orderDate = new Date(order.date);
    const now = new Date();
    const diffDays =
      (now.getTime() - orderDate.getTime()) / (1000 * 60 * 60 * 24);

    const matchesTime =
      timeFilter === "all"
        ? true
        : timeFilter === "10"
          ? diffDays <= 10
          : diffDays <= 30;

    return matchesSearch && matchesStatus && matchesTime;
  });

  // getOrderHistory()
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  return (
    <div>
      <div className="flex flex-col gap-2 my-6">
        <h2 className="text-xl">Order History</h2>
        <p className="light-text">View and manage all your past orders</p>
      </div>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search by name or ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border py-2 px-4 border-[#DAD8D8] rounded-xl"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border py-2 px-4 light-text border-[#DAD8D8] rounded-xl"
        >
          <option value="all">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <select
          value={timeFilter}
          onChange={(e) => setTimeFilter(e.target.value)}
          className="border py-2 px-4 light-text border-[#DAD8D8] rounded-xl"
        >
          <option value="all">All Time</option>
          <option value="10">Last 10 Days</option>
          <option value="30">Last 30 Days</option>
        </select>
      </div>
      <ul>
        {filteredOrders.map((order) => (
          <li key={order.id} className="content-container">
            <div className="w-[85%]">
              <div className="flex justify-between items-center">
                <div className="content-container flex justify-between items-center">
                  <div>
                    <h3>Order #{order.order_number}</h3>
                    <div className="flex gap-4 light-text">
                      <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                      <span>{order.items.length} items</span>
                    </div>
                  </div>
                  <div>
                    <p
                      className={clsx(
                        " px-3 py-1 rounded-full text-sm",
                        order.status === "Delivered" &&
                          "bg-green-100 text-[#42824D]",
                        order.status === "Pending" &&
                          "bg-yellow-100 text-yellow-800",
                        order.status === "Cancelled" &&
                          "bg-red-100 text-red-800",
                      )}
                    >
                      {order.status}
                    </p>
                  </div>
                </div>
              </div>

              <ul className="flex gap-2">
                {order.items.slice(0, 2).map((item) => (
                  <li key={item.item_id} className="flex-1">
                    <div className="flex gap-2 justify-start items-center p-2 rounded-xl bg-[#F7FCFF]">
                      <Image
                        src={item.image}
                        alt={item.item_name}
                        width={12}
                        height={12}
                        className="w-8 h-8 mb-2"
                      />
                      <div className="flex flex-col">
                        <span>{item.item_name}</span>
                        <span className="pl-1 text-[#888888]">
                          Qty: {item.quantity}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
                {/* If more than 2 items, show a "remaining count" */}
                {order.items.length > 2 && (
                  <li className="flex">
                    <div className="flex items-center justify-center p-2 rounded-xl bg-[#EEE] text-[#555]">
                      +{order.items.length - 2} more
                    </div>
                  </li>
                )}
              </ul>
              <div className="mt-6">
                <span className="text-xl text-[#014162] font-semibold">
                  £{calculateTotal(order.items)}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderhistoryClient;
