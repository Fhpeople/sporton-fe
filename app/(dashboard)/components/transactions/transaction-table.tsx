import priceFormatter from "@/app/utils/price-formatter";
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";

const transactionData = [
  {
    date: "23/02/2026 19:32",
    customer: "John Doe",
    contact: "+123123123 ",
    total: 1500000,
    status: "pending",
  },
  {
    date: "23/02/2026 19:32",
    customer: "Delon Marx",
    contact: "+456456456 ",
    total: 2500000,
    status: "paid",
  },
  {
    date: "23/02/2026 19:32",
    customer: "Delon Marx",
    contact: "+321654987 ",
    total: 1000000,
    status: "rejected",
  },
];

type TTransactionTableProps = {
  onViewDetails: () => void;
};

const TransactionTable = ({ onViewDetails }: TTransactionTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-600 border-yellow-300";
      case "rejected":
        return "bg-red-100 text-red-600 border-red-300";
      case "paid":
        return "bg-green-100 text-green-600 border-green-300";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 font-semibold text-sm">Date</th>
            <th className="px-4 py-3 font-semibold text-sm">Customer</th>
            <th className="px-4 py-3 font-semibold text-sm">Contact</th>
            <th className="px-4 py-3 font-semibold text-sm">Total</th>
            <th className="px-4 py-3 font-semibold text-sm">Status</th>
            <th className="px-4 py-3 font-semibold text-sm">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((data, index) => (
            <tr key={index} className="border-b border-gray-200 last:border-b-0">
              <td className="px-4 py-3 text-sm font-medium">{data.date}</td>
              <td className="px-4 py-3 text-sm font-medium">{data.customer}</td>
              <td className="px-4 py-3 text-sm font-medium">{data.contact}</td>
              <td className="px-4 py-3 text-sm font-medium">
                {priceFormatter(data.total)}
              </td>
              <td className="px-4 py-3">
                <div
                  className={`px-3 py-0.5 rounded-full border text-center w-fit text-xs uppercase font-medium ${getStatusColor(data.status)}`}
                >
                  {data.status}
                </div>
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={onViewDetails}
                  className="flex items-center gap-1.5 text-sm text-gray-500 cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md duration-200"
                >
                  <FiEye size={14} />
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;