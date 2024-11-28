import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSwitch } from "../redux/changeAddress";
import { addAddress } from "../redux/changeAddress";

function ChangeAddress() {
  const toggle = useSelector((state) => state.mangeAddress.status);
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");

  const handleAddres = (addressVlaue) => {
    setAddress(addressVlaue);
  };

  const OnSubmitHandle = (e) => {
    e.preventDefault();
    setAddress("");
    dispatch(addAddress(address));
  };

  const handleCheckout = () => {
    dispatch(toggleSwitch());
  };

  return (
    <div>
      {toggle && (
        <div className="fixed w-full h-full z-50 bg-gray-800 bg-opacity-75 top-0 left-0 flex justify-center items-center">
          <div className="px-4 py-10 rounded-lg bg-white w-[800px]">
            <form onSubmit={(e) => OnSubmitHandle(e)}>
              <input
                type="text"
                value={address}
                onChange={(e) => handleAddres(e.target.value)}
                placeholder="Enter New Addres"
                className="pl-5 placeholder:text-xl py-3 w-full placeholder:px-5 bg-gray-100 rounded-lg"
              />
              <div className="w-full flex justify-between px-10 mt-5">
                <span
                  onClick={() => handleCheckout()}
                  className="bg-redBisic cursor-pointer py-2 px-5 rounded-lg text-white font-bold"
                >
                  Cancel
                </span>
                <input
                  className="bg-blue-500 cursor-pointer py-2 px-5 rounded-lg text-white font-bold"
                  type="submit"
                  value="Save Address"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChangeAddress;
