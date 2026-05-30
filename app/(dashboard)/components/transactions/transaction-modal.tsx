import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";
import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import { FiCheck, FiX } from "react-icons/fi";

type TTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TransactionModal = ({ isOpen, onClose }: TTransactionModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
      <div className="flex gap-5">
        <div className="shrink-0">
          <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
          <Image
            src="/images/payment-proof-dummy.svg"
            alt="payment proof"
            width={160}
            height={320}
            className="rounded-md"
          />
        </div>

        <div className="flex flex-col flex-1 min-w-0">
          <h4 className="font-semibold text-sm mb-2">Order Details</h4>
          <div className="bg-gray-100 rounded-md flex flex-col gap-2 p-3 text-sm mb-4">
            {[
              { label: "Date", value: "23/02/2026 19:32" },
              { label: "Customer", value: "John Doe" },
              { label: "Contact", value: "+123123123" },
              {
                label: "Shipping Address",
                value: "Merdeka Street, Jakarta, Indonesia, 332122",
              },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between gap-4 font-medium">
                <div className="text-gray-400 whitespace-nowrap">{label}</div>
                <div className="text-right">{value}</div>
              </div>
            ))}
          </div>

          <h4 className="font-semibold text-sm mb-2">Items Purchased</h4>
          <div className="border border-gray-200 rounded-lg p-2.5 flex items-center gap-2.5 mb-4">
            <div className="bg-gray-100 rounded w-8 h-8 flex items-center justify-center shrink-0">
              <Image
                src="/images/products/product-1.svg"
                width={28}
                height={28}
                alt="product image"
              />
            </div>
            <div className="font-medium text-sm flex-1">SportsOn Hyperfast Shoes</div>
            <div className="font-medium text-sm text-gray-700 shrink-0">3 units</div>
          </div>

          <div className="flex justify-between items-center text-sm mb-4">
            <h4 className="font-semibold">Total</h4>
            <div className="text-primary font-semibold">
              {priceFormatter(450000)}
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button
              className="text-primary! bg-primary-light! rounded-md"
              size="small"
            >
              <FiX size={16} />
              Reject
            </Button>
            <Button
              className="text-white! bg-[#50C252]! rounded-md"
              size="small"
            >
              <FiCheck size={16} />
              Approve
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TransactionModal;