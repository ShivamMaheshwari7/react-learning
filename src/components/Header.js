import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-32 rounded-2xl m-1 border" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 text-slate-900 text-lg items-center">
          <li className="px-3 mx-1">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-3  mx-1 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3  mx-1 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3 mx-1 ">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3 mx-1 ">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3 mx-1 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="login px-3 py-2 mx-1 border-2 rounded-lg bg-green-800 text-white"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-3 mx-1 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
