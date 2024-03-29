import Header from "../components/Header";
import CarouselMobile from "../components/CarouselMobile";
import ProductInfo from "../components/ProductInfo";
import ProductShowDesktop from "../components/ProductShowDesktop";

const ProductPage: React.FC = () => {
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
      </main>
    </div>
  );
};

export default ProductPage;
