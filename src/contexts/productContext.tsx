import { Product } from "../types";
import { createContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

export interface ProductContextInterface {
    products: Product[],
    setProducts: Dispatch<SetStateAction<Product[]>>
}

const defaultState:ProductContextInterface = {
    products: [],
    setProducts: () => {},
};

export const ProductContext = createContext(defaultState);

type ProductProvideProps = {
    children: ReactNode
}

export default function ProductProvider({children} : ProductProvideProps){
    const [products, setProducts] = useState<Product[]>([]);

    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}


