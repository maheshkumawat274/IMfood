import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../assets/logo/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const products = [
    { name: "Spices", path: "/products/spices" },
    { name: "Pulses", path: "/products/pulses" },
    { name: "Fresh Fruits", path: "/products/fresh-fruits" },
    { name: "Fresh Vegetables", path: "/products/fresh-vegetables" },
    { name: "Tea", path: "/products/tea" },
    { name: "Coffee", path: "/products/coffee" },
    { name: "Grains", path: "/products/grains" },
    { name: "Oil", path: "/products/oil" },
    { name: "Dairy Products", path: "/products/dairy-products" },
    { name: "Household Products", path: "/products/household-products" },
  ];

  return (
    <header className="w-full bg-transparent py-2 fixed top-0 z-50">
      <div className="max-w-[90%] mx-auto px-0 sm:px-6 lg:px-8 bg-white shadow-lg sticky top-0 z-50 rounded-lg">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1">
            <img src={Logo} alt="logo" className="w-18" />
            <span className="text-2xl lg:hidden xl:block font-extrabold text-green-700">
              IM FOODS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="relative text-gray-700 hover:text-green-700 font-medium transition-colors duration-200"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="relative text-gray-700 hover:text-green-700 font-medium transition-colors duration-200"
            >
              About Us
            </Link>

            <div className="relative">
              <button
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className="flex items-center space-x-1 text-gray-700 hover:text-green-700 transition-colors duration-200 py-2"
              >
                <span className="font-medium">Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Products Dropdown */}
              <div
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 ${
                  isProductsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-2">
                  {products.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/blogs"
              className="relative text-gray-700 hover:text-green-700 font-medium transition-colors duration-200"
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              className="relative text-gray-700 hover:text-green-700 font-medium transition-colors duration-200"
            >
              Contact Us
            </Link>

            {/* Green Button */}
            <a
              href="https://imfoodsindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center px-5 py-2 rounded-full 
                         bg-green-600 text-white font-semibold 
                         hover:bg-green-700 transition-all duration-200 shadow-md"
            >
              IM Foods Halal Meat
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-2 border-t border-gray-100">
            <Link to="/" className="block px-3 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block px-3 py-2" onClick={() => setIsMenuOpen(false)}>About Us</Link>

            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="flex items-center justify-between w-full px-3 py-2"
            >
              <span>Products</span>
              <ChevronDown className={`${isProductsOpen ? "rotate-180" : ""}`} />
            </button>

            {isProductsOpen && (
              <div className="pl-6">
                {products.map((product) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="block py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/blogs" className="block px-3 py-2" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
            <Link to="/contact" className="block px-3 py-2" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>

            {/* Mobile Green Button */}
            <a
              href="https://imfoodsindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-3 mt-3 text-center px-4 py-2 rounded-lg 
                         bg-green-600 text-white font-semibold 
                         hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              IM Foods Halal Meat
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
