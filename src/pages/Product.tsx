import Header from "../components/Header";
import CarouselMobile from "../components/CarouselMobile";
import ProductInfo from "../components/ProductInfo";
import ProductShowDesktop from "../components/ProductShowDesktop";
import Chatbot from "react-chatbot-kit";
import MessageParser from "../helpers/MessageParser.js";
import ActionProvider from "../helpers/ActionProvider.js";
import config from "../helpers/config.js";
import { FaRobot } from "react-icons/fa6";
import { useState } from "react";

const ProductPage: React.FC = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div>
      <Header />
      <main className="">
        <div className="md:hidden">
          <CarouselMobile />
          <div className="p-6">
            <ProductInfo />
          </div>
        </div>
        <div className="hidden md:mt-[56px] md:grid md:grid-cols-2 md:gap-[125px] md:items-center md:px-4 md:max-w-[1000px] md:mx-auto lg:px-0">
          <ProductShowDesktop />
          <ProductInfo />
        </div>
        <div className="fixed bottom-10 right-5">
          <div className="relative">
            <button
              onClick={() => {
                setIsToggle(!isToggle);
              }}
              className="w-8 h-8 bg-primary-orange rounded-full flex justify-center items-center"
            >
              <FaRobot
                style={{
                  color: "#ffffff",
                }}
              />
            </button>
            {isToggle && (
              <div className="absolute bottom-10 right-3 py-2 px-4 rounded-md drop-shadow-md w-80">
                <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
