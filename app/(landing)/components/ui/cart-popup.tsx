import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

const CartPopup = () => {
  const { push } = useRouter();
  const {items, removeItem} = useCartStore();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handleCheckout = () => {
    push("/checkout");
  };

  return (
    <div className="absolute bg-white right-10 top-16 shadow-xl shadow-black/10 border border-gray-200 w-80 z-10 rounded-sm">
      <div className="p-3 border-b border-gray-200 font-bold text-center">
        Shopping Cart
      </div>
      {items.length ? (items.map((item, index) => (
        <div className="border-b border-gray-200 p-3 flex gap-2" key={index}>
          <div className="bg-primary-light aspect-square w-14 flex justify-center items-center">
            <Image
              src={getImageUrl(item.imageUrl)}
              width={63}
              height={63}
              alt={item.name}
              className="aspect-square object-contain"
            />
          </div>
          <div className="self-center">
            <div className="text-xs font-medium">{item.name}</div>
            <div className="flex gap-2 font-medium text-xs">
              <div>{item.qty}x</div>
              <div className="text-primary">{priceFormatter(item.price)}</div>
            </div>
          </div>
          <Button
            size="small"
            variant="ghost"
            className="w-7 h-7 p-0! self-center ml-auto" onClick={() => removeItem(item._id)}>
            <FiTrash2 />
          </Button>
        </div>
      ))
    ) : (
      <div className="text-center opacity-50 py-5">
          Your shopping cart is empty
        </div>
      )}
      <div className="border-t border-gray-200 p-3">
        <div className="flex justify-between font-semibold">
          <div className="text-xs">Total</div>
          <div className="text-primary text-xs">
            {priceFormatter(totalPrice)}
          </div>
        </div>
        <Button
          variant="dark"
          size="small"
          className="w-full mt-3 text-xs py-2"
          onClick={handleCheckout}
        >
          Checkout Now <FiArrowRight size={14}/>
        </Button>
      </div>
    </div>
  );
};

export default CartPopup;