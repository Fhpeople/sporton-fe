import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import priceFormatter from "@/app/utils/price-formatter";

const ProductDetail = () => {
  return (
    <main className="container mx-auto py-20 px-24 flex -mt-5 -mb-35 gap-12 items-center mb-10">
      <div className="bg-primary-light aspect-square w-full max-w-md flex justify-center items-center p-4">
        <Image
          src="/images/products/product-4.svg"
          width={400}
          height={400}
          alt="product 4 image"
          className="aspect-square object-contain w-full"
        />
      </div>

      <div className="w-full">
        <h1 className="font-bold text-4xl mb-4">SportsOn HyperSoccer v2</h1>
        
        <div className="bg-primary-light rounded-full text-primary py-1.5 px-5 w-fit mb-5 text-sm font-medium">
          Football
        </div>
        
        <p className="leading-relaxed mb-6 text-gray-600 max-w-xl text-sm">
          The SportsOn HyperSoccer v2 is engineered for the player who demands
          precision, power, and unrivaled speed on the pitch. Featuring a
          striking, two-toned black and white design with deep crimson accents,
          these cleats don't just perform—they make a statement. Experience the
          future of football footwear with v2's enhanced fit and cutting-edge
          traction.
        </p>
        
        <div className="text-primary text-2xl font-semibold mb-10">
            {priceFormatter(458000)}
        </div>

        <ProductActions />
      </div>
    </main>
  );
};

export default ProductDetail;