"use client";

import { useState } from "react";
import OrderSubmitted from "../../components/order-status/order-submitted";
import OrderConfirmed from "../../components/order-status/order-confirmed";

const OrderStatus = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  return (
    <main className="bg-gray-100 min-h-[80vh] pb-20">
      <div className="max-w-5xl mx-auto py-16 scale-90 origin-top">
        <h1 className="text-5xl font-bold text-center -mb-7">Order Status</h1>
      </div>
      {isConfirmed ? <OrderConfirmed /> : <OrderSubmitted />}
    </main>
  );
};

export default OrderStatus;