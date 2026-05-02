"use client";

import {
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiShoppingBag,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProductActions = () => {
  const { push } = useRouter();
  const [qty, setQty] = useState(1);

  return (
    <div className="flex gap-3">
      <div className="border border-gray-300 inline-flex w-fit">
        <div className="w-12 h-12 text-lg font-medium border-r border-gray-300 flex justify-center items-center">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col w-7">
          <button
            className="border-b border-gray-300 cursor-pointer h-1/2 flex items-center justify-center hover:bg-gray-50"
            onClick={() => setQty(qty + 1)}
          >
            <FiChevronUp size={12} />
          </button>
          <button
            className="cursor-pointer h-1/2 flex items-center justify-center hover:bg-gray-50"
            onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
          >
            <FiChevronDown size={12} />
          </button>
        </div>
      </div>

      <Button className="px-8 h-12 flex gap-2 items-center whitespace-nowrap text-sm">
        <FiShoppingBag size={18} />
        Add to Cart
      </Button>

      <Button
        variant="dark"
        className="px-8 h-12 flex gap-2 items-center whitespace-nowrap text-sm"
        onClick={() => push("/checkout")}
      >
        Checkout Now
        <FiArrowRight size={18} />
      </Button>
    </div>
  );
};

export default ProductActions;