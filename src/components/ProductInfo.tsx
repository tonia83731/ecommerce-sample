import MinusIcon from "../assets/icon-minus.svg?react";
import PlusIcon from "../assets/icon-plus.svg?react";
import CartIcon from "../assets/icon-cart.svg?react";
import Product1 from "../assets/image-product-1.jpg";
import { useProductContext } from "../context/ProductContext";

export default function ProductInfo() {
  const { inputNum, setInputNum, cartItem, setCartItem } = useProductContext();

  return (
    <div className="">
      <h5 className="text-primary-orange text-xs font-bold">SNEAKER COMPANY</h5>
      <h1 className="text-neutral-dark-blue font-bold text-[28px] py-5">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-neutral-dark-grayish-blue text-sm leading-6 pb-9">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex justify-between items-center md:flex-col md:items-start">
        <div className="flex items-center">
          <h1 className="text-neutral-dark-blue font-bold text-[28px]">
            $125.00
          </h1>
          <span className="bg-primary-pale-orange text-primary-orange rounded-md font-bold px-2.5 py-1 ml-6">
            50%
          </span>
        </div>
        <p className="line-through text-neutral-grayish-blue font-bold md:mt-4">
          $250.00
        </p>
      </div>
      <div className="md:grid md:grid-cols-[157px_1fr] md:gap-4 md:h-14 md:mt-16">
        <div className="bg-neutral-light-grey rounded-[10px] flex justify-between items-center p-6 my-6 md:h-full md:my-0">
          <button
            onClick={() => {
              if (inputNum > 0) setInputNum(inputNum - 1);
              else setInputNum(0);
            }}
          >
            <MinusIcon />
          </button>
          <input
            type="text"
            value={inputNum}
            className="w-full bg-neutral-light-grey text-neutral-dark-blue font-bold text-center focus:outline-none"
            onKeyDown={(event) => {
              const key = event.key;
              if (
                event.ctrlKey ||
                key === "Backspace" ||
                key === "Delete" ||
                key === "ArrowLeft" ||
                key === "ArrowRight" ||
                key === "ArrowUp" ||
                key === "ArrowDown" ||
                key === "Home" ||
                key === "End" ||
                (key === "a" && event.ctrlKey) || // Allow Ctrl+A
                (key === "c" && event.ctrlKey) || // Allow Ctrl+C
                (key === "v" && event.ctrlKey) || // Allow Ctrl+V
                (key === "x" && event.ctrlKey) // Allow Ctrl+X
              ) {
                return;
              }
              if (!/[0-9-]/.test(key)) event.preventDefault();
            }}
            onChange={(event) => setInputNum(+event.target.value)}
          />
          <button onClick={() => setInputNum(inputNum + 1)}>
            <PlusIcon />
          </button>
        </div>
        <button
          className="bg-primary-orange text-white flex justify-center item-center rounded-[10px] py-5 w-full"
          onClick={() => {
            if (inputNum <= 0) {
              alert("Products quantity must not smaller than 1!");
              return;
            }
            const filterItemIndex = cartItem.findIndex(
              (item) => item.name === "Fall Limited Edition Sneakers"
            );

            if (filterItemIndex === -1) {
              // Item is not in the cart, add it
              const newItem = {
                name: "Fall Limited Edition Sneakers",
                price: 125.0,
                qty: inputNum,
                img: Product1,
              };
              setCartItem([...cartItem, newItem]);
            } else {
              // Item is already in the cart, update its quantity
              const updatedCart = [...cartItem];
              updatedCart[filterItemIndex].qty += inputNum;
              setCartItem(updatedCart);
            }
            setInputNum(0);
          }}
        >
          <div className="cart-icon">
            <CartIcon />
          </div>
          <div className="ml-4 font-bold add-to-cart">Add to cart</div>
        </button>
      </div>
    </div>
  );
}
