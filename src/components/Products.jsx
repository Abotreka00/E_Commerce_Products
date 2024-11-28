import { useDispatch, useSelector } from "react-redux";
import { productsAsyncThunk } from "../redux/productSlice";
import {
  memo,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FaStar } from "react-icons/fa";
import { addProduct } from "../redux/cart";
import SpinnerComp from "./Spinner";
import { toast, Flip } from "react-toastify";
import { Link } from "react-router-dom";
import { HiQuestionMarkCircle } from "react-icons/hi";

// eslint-disable-next-line react/prop-types
function Products({ titlePage, minProdc, maxProdc }) {
  const [addToCart, setAddToCart] = useState([]);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const memoizedDispatch = useCallback(() => {
    dispatch(productsAsyncThunk());
  }, [dispatch]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  const handleAddToCart = (item) => {
    // Check if item is already in the cart
    const isItemInCart = addToCart.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      // Add item to the cart
      setAddToCart([...addToCart, item]);

      // Show success toast notification
      toast.success("Added To Cart", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    } else {
      // Show already in cart toast notification
      toast.error("Oh no! Product is already in the cart", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    }
  };

  useEffect(() => {
    dispatch(addProduct(addToCart));
  }, [dispatch, addToCart]);

  const renderStarRating = useMemo(() => {
    // eslint-disable-next-line react/display-name
    return (rate) => {
      const starCount = Math.floor(rate);
      return (
        <div className="flex flex-row items-center mt-2">
          {[...Array(starCount)].map((_, index) => (
            <FaStar key={index} className="text-lg text-yellow-700" />
          ))}
        </div>
      );
    };
  }, []);

  return (
    <div className="bg-white pb-8 pt-12">
      <h2 className="uppercase font-bold text-xl md:text-2xl text-center">
        {titlePage}
      </h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {loading ? (
          <SpinnerComp />
        ) : error ? (
          error.message
        ) : (
          products.slice(minProdc, maxProdc).map((product) => (
            <div
              key={product.id}
              className="w-full h-fit relative shadow-lg rounded-lg p-3 duration-300 hover:scale-110"
            >
              <Link
                to={`/productdetils/${product.id}`}
                className="bg-redBisic absolute top-5 left-5 rounded-full text-white font-bold text-3xl cursor-pointer hover:bg-black duration-300"
              >
                <HiQuestionMarkCircle />
              </Link>
              <LazyImage
                src={product.image}
                alt={product.title}
                className="w-full h-[300px] p-5 md:h-[300px] md:p-10"
              />
              <div className="relative w-full h-[150px]">
                <h3 className="capitalize min-h-[150px] font-bold md:text-lg">
                  {product.title}
                </h3>
                <div className="absolute bottom-0 left-0 w-full flex flex-row my-2 justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-gray-700 font-bold">
                      ${product.price}
                    </span>
                    {renderStarRating(product.rating.rate)}
                  </div>
                  <button
                    onClick={() => {
                      handleAddToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        description: product.description,
                        category: product.category,
                        image: product.image,
                      });
                    }}
                    className="flex items-center justify-center transition-all duration-300 w-8 h-8 bg-redBisic group text-white text-sm rounded-full hover:w-32 hover:bg-hoverRedBisic cursor-pointer"
                  >
                    <span className="group-hover:hidden">+</span>
                    <span className="hidden group-hover:block">
                      Add to Cart
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Products;

// eslint-disable-next-line react/display-name, react/prop-types
const LazyImage = memo(({ src, alt, className }) => {
  return (
    <Suspense
      fallback={<div className="animate-pulse bg-gray-200 h-full w-full"></div>}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={className}
        width={300}
        height={300}
      />
    </Suspense>
  );
});
