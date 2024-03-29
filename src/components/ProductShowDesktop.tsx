import Product1 from "../assets/image-product-1.jpg";
import Product2 from "../assets/image-product-2.jpg";
import Product3 from "../assets/image-product-3.jpg";
import Product4 from "../assets/image-product-4.jpg";
import ReactImageMagnify from "react-image-magnify";
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

export default function ProductShowDesktop() {
  const [show, setProductShow] = useState(0);
  return (
    <div className="">
      <div className="">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "product image show",
              isFluidWidth: true,
              src: imageData[show].src,
            },
            largeImage: {
              src: imageData[show].src,
              width: 1000,
              height: 800,
            },
            enlargedImageContainerStyle: {
              zIndex: 9,
              backgroundColor: "white",
              objectFit: "cover",
            },
            enlargedImageContainerDimensions: {
              width: "150%",
              height: "120%",
            },
            className: "d-none d-md-block",
          }}
        />
      </div>
      {/* <img
        src={imageData[show].src}
        alt="img-show"
        className="rounded-[15px]"
      /> */}
      <div className="flex justify-between items-center mt-9">
        {imageData.map((img, index) => {
          return (
            <button
              key={index}
              onClick={() => setProductShow(index)}
              className="img-click"
            >
              <img
                src={img.src}
                alt={img.name}
                className={`img-click w-[88px] h-[88px] rounded-[10px] ${
                  index === show ? "opacity-25" : "opacity-100"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
