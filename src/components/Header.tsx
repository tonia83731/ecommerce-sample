import MenuIcon from "../assets/icon-menu.svg?react";
import CartIcon from "../assets/icon-cart.svg?react";
import CloseIcon from "../assets/icon-close.svg?react";
import Logo from "../assets/logo.svg?react";
import DeleteIcon from "../assets/icon-delete.svg?react";
import Avatar from "../assets/image-avatar.png";
import { useState } from "react";
import { useProductContext } from "../context/ProductContext";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  const { cartItem, setCartItem } = useProductContext();
  const [mobileNavToggle, setMobileNavToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);
  const { pathname } = useLocation();
  const linkData = [
    {
      link: "/collections",
      name: "Collections",
    },
    {
      link: "/men",
      name: "Men",
    },
    {
      link: "/women",
      name: "Women",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/contact",
      name: "Contact",
    },
  ];
  const itemList = cartItem.map((item) => {
    const { name, price, qty, img } = item;
    const total = price * qty;
    return (
      <div
        className="text-neutral-dark-grayish-blue px-6 grid grid-cols-[50px_1fr_20px] gap-4 items-center"
        key={item.name}
      >
        <img
          src={img}
          alt=""
          className="w-[50px] h-[50px] rounded object-cover"
        />
        <div className="">
          <h5 className="">{name}</h5>
          <div className="flex items-center">
            <p className="">
              ${price} <span className="">x {qty}</span>
            </p>
            <p className="font-bold text-neutral-dark-blue ml-2">${total}</p>
          </div>
        </div>
        <button
          className=""
          onClick={() => {
            const filterItem = cartItem.filter((item) => item.name !== name);
            setCartItem(filterItem);
          }}
        >
          <DeleteIcon />
        </button>
      </div>
    );
  });

  return (
    <>
      <header className="h-[70px] sticky top-0 left-0 z-[100] bg-white xl:h-[108px]">
        <div className="px-6 py-5 flex justify-between xl:grid xl:grid-cols-7">
          <div className="flex items-center">
            <button
              className="xl:hidden nav-menu"
              onClick={() => setMobileNavToggle(!mobileNavToggle)}
            >
              <MenuIcon />
            </button>
            <Link to="/" className="ml-4 nav-link logo">
              <Logo />
            </Link>
          </div>
          <nav className="hidden xl:flex xl:gap-8 xl:items-center xl:font-normal xl:text-neutral-dark-grayish-blue xl:col-span-3">
            {linkData.map((link) => {
              return (
                <Link
                  key={link.name}
                  to={link.link}
                  className={`mb-7 xl:mb-0 xl:mt-2 py-4 ${
                    pathname === link.link && "border-b-4 border-primary-orange"
                  } nav-link`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center xl:col-start-7">
            <div className="relative flex items-center">
              <button className="" onClick={() => setCartToggle(!cartToggle)}>
                <CartIcon />
              </button>
            </div>
            <button className="group w-6 h-6 md:w-8 md:h-8 xl:w-12 xl:h-12 ml-4 md:ml-8 xl:ml-12">
              <img
                src={Avatar}
                alt="avatar"
                className="w-6 h-6 rounded-full object-cover md:w-8 md:h-8 xl:w-12 xl:h-12 group-active:border group-active:border-primary-orange"
              />
            </button>
          </div>
          {mobileNavToggle && (
            <div className="fixed top-0 left-0 w-full h-full min-h-screen bg-black-75">
              <div className="w-64 h-full min-h-screen bg-white p-6">
                <button
                  className="mb-14"
                  onClick={() => setMobileNavToggle(false)}
                >
                  <CloseIcon fill="#69707d" />
                </button>
                <nav className="flex flex-col font-bold text-lg">
                  {linkData.map((link) => {
                    return (
                      <Link
                        to={link.link}
                        className={`mb-7 xl:mb-0 xl:mt-2 h-full ${
                          pathname === link.link &&
                          "border-l-4 border-primary-orange"
                        } nav-link`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="md:h-px md:w-[calc(100%-3rem)] md:mx-auto md:bg-neutral-light-grey"></div>
      {cartToggle && (
        <div className="fixed top-[72px] right-[1%] z-[60] bg-white rounded-[10px] drop-shadow-lg w-[98%] h-64 py-5 md:w-[360px] md:right-6 xl:top-[110px]">
          <h3 className="font-bold text-neutral-dark-blue px-6">Cart</h3>
          <div className="w-full h-px bg-neutral-light-grey mt-7 mb-6"></div>
          <div className="w-full h-36">
            {cartItem.length > 0 ? (
              itemList
            ) : (
              <div className="h-full font-bold text-neutral-dark-grayish-blue px-6 flex justify-center items-center">
                Your cart is empty.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
