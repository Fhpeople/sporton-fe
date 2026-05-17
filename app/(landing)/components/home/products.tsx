"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";
import { Product } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import { useCartStore } from "@/app/hooks/use-cart-store";

type TProductsProps = {
  products: Product[]
}

const ProductsSection = ({products}: TProductsProps) => {
  const { addItem } = useCartStore();

  const handleAddtoCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <section id="products-section" className="container mx-auto mt-20 px-20 mb-30">
      <h2 className="font-bold italic text-3xl text-center mb-11">
            <span className="text-primary">OUR </span>PRODUCTS
      </h2>
        
      <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <Link
            href={`/product/${product._id}`}
            key={product._id}
            className="p-1.5 bg-white hover:drop-shadow-xl duration-300"
          >
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative p-5">
              <Image
                src={getImageUrl(product.imageUrl)}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square object-contain"
              />
              <Button className="w-8 h-8 p-2! absolute right-1.5 top-1.5 " onClick={(e) => handleAddtoCart(e, product)}>
                <FiPlus size={20} />
              </Button>
            </div>
            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between mb-8">
              <div className="text-gray-500">{product.category.name}</div>
              <div className="font-medium text-primary">
                {priceFormatter(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;