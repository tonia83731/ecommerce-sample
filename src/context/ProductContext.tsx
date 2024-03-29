import {
  ReactNode,
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

type context_props = {
  children: ReactNode;
};
type item = {
  name: string;
  price: number;
  qty: number;
  img: string;
};
type context_value = {
  inputNum: number;
  setInputNum: (inputNum: number) => void;
  cartItem: item[];
  setCartItem: Dispatch<SetStateAction<item[]>>;
};

const ProductContext = createContext<context_value | null>(null);

export const useProductContext = () => {
  const productContext = useContext(ProductContext);
  if (!productContext) throw new Error("There is no context!");
  return productContext;
};
export const ProductContextProvider = (props: context_props) => {
  const { children } = props;
  const [inputNum, setInputNum] = useState(0);
  const [cartItem, setCartItem] = useState<item[]>([]);

  return (
    <ProductContext.Provider
      value={{ inputNum, setInputNum, cartItem, setCartItem }}
    >
      {children}
    </ProductContext.Provider>
  );
};
