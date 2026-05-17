import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import priceFormatter from "@/app/utils/price-formatter";
import { getProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";

export type TPageProps = {
  params: Promise<{ id: string }>;
}

const ProductDetail = async ({params}: TPageProps) => {
  const { id } = await params;
  const product = await getProductDetail(id);

  return (
    <main className="container mx-auto pt-32 pb-25 px-24 flex gap-12 items-center">
      <div className="bg-primary-light aspect-square w-full max-w-md flex justify-center items-center p-4">
        <Image
          src={getImageUrl(product.imageUrl)}
          width={400}
          height={400}
          alt={product.name}
          className="aspect-square object-contain w-full"
        />
      </div>

      <div className="w-full">
        <h1 className="font-bold text-4xl mb-4">{product.name}</h1>
        
        <div className="bg-primary-light rounded-full text-primary py-1.5 px-5 w-fit mb-5 text-sm font-medium">
          {product.category.name}
        </div>
        
        <p className="leading-relaxed mb-6 text-gray-600 max-w-xl text-sm">
          {product.description}
        </p>
        
        <div className="text-primary text-2xl font-semibold mb-10">
            {priceFormatter(product.price)}
        </div>
        <ProductActions product={product} stock={product.stock} />
      </div>
    </main>
  );
};

export default ProductDetail;