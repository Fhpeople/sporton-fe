import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
  {
    name: "Running",
    imgUrl: "category-running.svg",
  },
  {
    name: "Tennis",
    imgUrl: "category-tennis.svg",
  },
  {
    name: "Basketball",
    imgUrl: "category-basketball.svg",
  },
  {
    name: "Football",
    imgUrl: "category-football.svg",
  },
  {
    name: "Badminton",
    imgUrl: "category-badminton.svg",
  },
  {
    name: "Swimming",
    imgUrl: "category-swimming.svg",
  },
];

const CategoriesSection = () => {
  return (
    <section id="category-section" className="container mx-auto pb-20 px-20 pt-20">
      
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl ml-3">Browse By Categories</h2>

        <Link
          href="#"
          className="flex gap-2 text-primary font-medium hover:underline mr-2.5">
          <span>See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>

      <div className="grid grid-cols-6 gap-6 mt-10 max-w-6xl mx-auto justify-items-center">
        {categoryList.map((category, index) => (
          <div
            key={index}
            className="rounded-xl bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-[140px] h-[140px] flex flex-col justify-center items-center hover:shadow-lg transition-all cursor-pointer"
          >
            <Image
              src={`/images/categories/${category.imgUrl}`}
              width={65}
              height={65}
              alt={category.name}
              className="mb-2"
            />

            <div className="text-primary font-bold text-lg">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;