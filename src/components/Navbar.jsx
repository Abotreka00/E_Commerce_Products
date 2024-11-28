import { useState, useRef, useEffect } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { menuItems } from "../assets/mockdata";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/productSlice";

const Navbar = () => {
  const [searchVlaue, setSearchVlaue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productInCart = useSelector((state) => state.cart.productInCart);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both the menu and the toggle button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); // Only re-run effect when isOpen changes

  const handleSubmition = (e) => {
    e.preventDefault();
    dispatch(setSearch(searchVlaue));
    navigate("/searchprodpage");
  };

  return (
    <div className="bg-white shadow-md w-full">
      <nav className="relative container px-5 md:px-0 sm:mx-auto md:pt-5 pb-5 flex flex-col gap-10">
        <div className="flex flex-row items-center justify-between my-5">
          <h1 className="text-2xl text-[black] font-bold">
            <Link to="/" className="hover:opacity-70 duration-300">
              e-Shop
            </Link>
          </h1>
          <form className="relative flex-1 mx-8" onSubmit={handleSubmition}>
            <input
              value={searchVlaue}
              onChange={(e) => setSearchVlaue(e.target.value)}
              className="focus:outline-none p-2.5 w-full rounded-lg placeholder:text-[12px] sm:placeholder:text-[16px] sm:placeholder:pl-3 border-4 border-white focus:border-2 focus:border-black shadow-sm"
              type="text"
              name="search"
              placeholder="Search on any product"
            />
            <button
              type="submit"
              className="text-gray-500 absolute top-1/2 right-[20px] -translate-y-1/2 hover:opacity-40 duration-300"
            >
              <FaSearch size={18} />
            </button>
          </form>
          <div className="flex items-center gap-8">
            <div className="relative text-2xl text-black">
              <Link to="/cart" className="relative group z-40">
                <FaShoppingCart className="group-hover:opacity-40 duration-300" />
                <span className="absolute -top-4 -right-3 font-bold w-5 h-5 rounded-full text-[20px] z-50 text-redBisic flex items-center justify-center">
                  {productInCart.length}
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/loginform"
                className="text-gray-700 hover:opacity-40 duration-300 font-medium"
              >
                Login
              </Link>
              <Link
                to="/registerpage"
                className="bg-redBisic text-white px-4 py-2 rounded-lg hover:bg-hoverRedBisic duration-300 font-medium"
              >
                Register
              </Link>
            </div>
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 md:hidden hover:opacity-40 duration-300"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        <div className="hidden md:block border-t border-gray-100 pt-4">
          <ul className="flex items-center justify-center gap-16 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item.label} className="group">
                <Link
                  to={item.path}
                  className="relative text-gray-700 duration-300 hover:opacity-70"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-[2px] w-full h-[3px] bg-black origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {isOpen && (
          <div
            ref={menuRef}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-50"
          >
            <ul className="flex flex-col py-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:opacity-40 duration-300 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="border-t border-gray-100 mt-2 pt-2">
                <Link
                  to="/login"
                  className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:opacity-40 duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="block mx-6 my-3 text-center bg-redBisic text-white py-2 rounded-lg hover:bg-hoverRedBisic duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
