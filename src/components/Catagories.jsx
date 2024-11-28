import { catagories } from "../assets/mockdata";
import shopHomeImage from "../assets/images/shopHome.jpg";
import { FaRegCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/productSlice";

function Catagories() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchProd = (catagorie) => {
    dispatch(setSearch(catagorie));
    navigate("/searchprodpage");
  };

  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-y-6 lg:gap-x-6">
      <div className="w-full lg:w-[33%] h-fit text-black">
        <h2 className="uppercase text-1xl bg-red-600 pl-6 py-3 rounded-t-lg font-bold text-white">
          Shop by Catagory
        </h2>
        <ul className="bg-gray-200 py-4">
          {catagories.map((catagorie, index) => (
            <li
              onClick={() => handleSearchProd(catagorie)}
              className="text-black flex flex-row items-center gap-3 pl-5 py-2 cursor-pointer w-full h-full duration-300 hover:bg-gray-300"
              key={index}
            >
              <span className="text-red-600 ">
                <FaRegCircle />
              </span>
              {catagorie}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full lg:w-[66%] relative">
        <img
          src={shopHomeImage}
          className="w-full h-auto"
          alt="shopHomeImage"
        />
        <div className="absolute top-5 left-5 lg:top-16 lg:left-16">
          <p className="uppercase mb-2 md:mb-4 font-bold text-gray-600">
            Code With Saleh
          </p>
          <h2 className="uppercase text-xl md:text-3xl font-bold">
            Welcome to e-shop
          </h2>
          <p className="uppercase mt-2 md:text-2xl text-gray-700 font-bold">
            millions+ prodducts
          </p>
          <Link
            to={"/shop"}
            className="block w-fit bg-red-600 px-5 md:px-10 uppercase py-2 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105"
          >
            shop now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Catagories;
