import { FiCreditCard, FiEdit2, FiTrash2 } from "react-icons/fi";

const bankData = [
  {
    bankName: "BCA",
    accountNumber: "123123",
    accountName: "PT SportOn Digital Indonesia",
  },
  {
    bankName: "Mandiri",
    accountNumber: "456789",
    accountName: "PT SportOn Digital Indonesia",
  },
  {
    bankName: "BRI",
    accountNumber: "321654",
    accountName: "PT SportOn Digital Indonesia",
  },
];

const BankInfoList = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {bankData.map((data, index) => (
        <div className="bg-white rounded-lg border border-gray-200" key={index}>
          <div className="flex justify-between p-4">
            <div className="flex gap-2 items-center">
              <div className="bg-blue-50 text-blue-600 rounded w-9 h-9 flex justify-center items-center shrink-0">
                <FiCreditCard size={18} />
              </div>
              <div>
                <div className="font-semibold text-sm">{data.bankName}</div>
                <div className="text-xs opacity-50">Bank Transfer</div>
              </div>
            </div>
            <div className="flex gap-2 text-gray-500">
              <button className="cursor-pointer hover:text-gray-800 duration-200">
                <FiEdit2 size={15} />
              </button>
              <button className="cursor-pointer hover:text-gray-800 duration-200">
                <FiTrash2 size={15} />
              </button>
            </div>
          </div>
          <div className="px-4 pb-3 font-medium">
            <div className="text-xs opacity-50 mb-0.5">ACCOUNT NUMBER</div>
            <div className="text-sm">{data.accountNumber}</div>
          </div>
          <div className="border-t border-gray-200 px-4 py-2.5 text-xs">
            <span className="opacity-50">Holder :</span>{" "}
            <span className="font-medium">PT SportsOn Digital</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BankInfoList;