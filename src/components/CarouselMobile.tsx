import Product1 from "../assets/image-product-1.jpg";
import Product2 from "../assets/image-product-2.jpg";
import Product3 from "../assets/image-product-3.jpg";
import Product4 from "../assets/image-product-4.jpg";
import NextIcon from "../assets/icon-next.svg?react";
import PrevIcon from "../assets/icon-previous.svg?react";
import { useState } from "react";

const imageData = [
  {
    name: "product1",
    src: Product1,
  },
  {
    name: "product2",
    src: Product2,
  },
  {
    name: "product3",
    src: Product3,
  },
  {
    name: "product4",
    src: Product4,
  },
];

export default function CarouselMobile() {
  const [directionPage, setDirectionPage] = useState(0);
  const handleDirectionClick = (btn: string) => {
    if (btn === "prev") {
      if (directionPage > 0) setDirectionPage(directionPage - 1);
      else setDirectionPage(3);
    } else {
      if (directionPage < 3) setDirectionPage(directionPage + 1);
      else setDirectionPage(0);
    }
  };
  return (
    <div className="relative w-full overflow-hidden">
      <button
        onClick={() => handleDirectionClick("prev")}
        className="absolute z-50 top-1/2 -translate-y-1/2 left-4 w-10 h-10 rounded-full flex justify-center items-center shadow bg-white"
      >
        <PrevIcon />
      </button>
      <div
        className="w-[400%] flex transition-transform ease-out duration-500 relative"
        style={{ transform: `translateX(-${directionPage * 25}%)` }}
      >
        {imageData.map((img) => {
          return (
            <img
              key={img.name}
              src={img.src}
              alt={img.name}
              className="w-full h-[300px] object-cover object-center sm:h-[350px]"
            />
          );
        })}
      </div>
      <button
        onClick={() => handleDirectionClick("next")}
        className="absolute z-50 top-1/2 -translate-y-1/2 right-4 w-10 h-10 rounded-full flex justify-center items-center shadow bg-white"
      >
        <NextIcon />
      </button>
    </div>
  );
}
