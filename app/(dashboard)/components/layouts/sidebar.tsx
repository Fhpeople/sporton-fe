"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiBox,
  FiCreditCard,
  FiLayers,
  FiLogOut,
  FiShoppingCart,
} from "react-icons/fi";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Products",
      icon: FiBox,
      link: "/admin/products",
    },
    {
      name: "Categories",
      icon: FiLayers,
      link: "/admin/categories",
    },
    {
      name: "Transactions",
      icon: FiShoppingCart,
      link: "/admin/transactions",
    },
    {
      name: "Bank Informations",
      icon: FiCreditCard,
      link: "/admin/bank-info",
    },
  ];

  return (
    <aside className="w-52 min-h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0">
      <div className="py-5 px-6 border-b border-gray-200">
        <Image
          src="/images/logo-admin.svg"
          alt="logo admin"
          width={140}
          height={28}
        />
      </div>
      <div className="flex flex-col gap-1 mt-6 px-3">
        {menuItems.map((item, index) => {
          const isActive = item.link === pathname;
          return (
            <Link
              href={item.link}
              key={index}
              className={`flex gap-2.5 items-center py-2.5 px-3 rounded-lg font-medium text-sm duration-300 ${
                isActive ? "bg-primary/15 text-primary" : "hover:bg-gray-100"
              }`}
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
      <Link
        href="#"
        className="flex gap-2.5 items-center font-medium text-sm py-2.5 px-3 mx-3 hover:bg-gray-100 duration-300 rounded-lg mt-auto mb-6"
      >
        <FiLogOut size={18} />
        Log Out
      </Link>
    </aside>
  );
};

export default Sidebar;