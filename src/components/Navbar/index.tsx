import React from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const routes = [
    "Home",
    "About",
    "Pages",
    "Products",
    "Shop",
    "Cart",
    "Contact",
  ];
  const navigate = useNavigate();

  return (
    <div className="h-20 border-b-2 border-black">
      <div className="relative h-full flex container mx-auto items-center">
        <h1 className="text-3xl text-bold mr-20">LutfullahShop</h1>
        <div className="flex gap-x-9">
          {routes.map((item) => (
            <nav
              key={item}
              className="cursor-pointer capitalize hover:text-red-200"
              onClick={() => navigate(item === "Home" ? "/" : item)}
            >
              {item}
            </nav>
          ))}
        </div>
        <div className="absolute right-0 flex">
          <input
            type="text"
            className="outline-none border-2 border-gray-300 py-1 px-3"
            placeholder="Search..."
          />
          <div className="h-10 w-10 bg-pink-600 flex items-center justify-center">
            <FiSearch size={20} color="#fff" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
