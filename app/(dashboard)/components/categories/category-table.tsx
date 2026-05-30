import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const categoryData = [
  {
    name: "Running",
    imageUrl: "/images/categories/category-running.svg",
    description: "lorem ipsum",
  },
  {
    name: "Football",
    imageUrl: "/images/categories/category-football.svg",
    description: "lorem ipsum",
  },
];

const CategoryTable = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 font-semibold text-sm">Category Name</th>
            <th className="px-4 py-3 font-semibold text-sm">Description</th>
            <th className="px-4 py-3 font-semibold text-sm w-32">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categoryData.map((data, index) => (
            <tr key={index} className="border-b border-gray-200 last:border-b-0">
              <td className="px-4 py-3 font-medium text-sm">
                <div className="flex gap-2 items-center">
                  <div className="bg-gray-100 rounded-md shrink-0">
                    <Image
                      src={data.imageUrl}
                      width={36}
                      height={36}
                      alt={data.name}
                      className="aspect-square object-contain"
                    />
                  </div>
                  <span>{data.name}</span>
                </div>
              </td>
              <td className="px-4 py-3 font-medium text-sm">{data.description}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2.5 text-gray-500">
                  <button className="hover:text-gray-800 duration-200">
                    <FiEdit2 size={16} />
                  </button>
                  <button className="hover:text-gray-800 duration-200">
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;