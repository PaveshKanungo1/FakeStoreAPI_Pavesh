import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Product } from "../types";
import { ProductContext } from "../contexts/productContext";

const GET_API = "https://fakestoreapi.com/products";
const DEL_API = "https://fakestoreapi.com/products";

const Products = () => {
  const { products, setProducts } = useContext(ProductContext);

  const getProductsData = async (): Promise<void> => {
    try {
      if (products.length === 0) {
        const productsAPI = await axios.get<Product[]>(GET_API);
        // console.log(products.data instanceof Array);
        console.log(productsAPI.data);
        setProducts(productsAPI.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const deleteProducts = async (id: number): Promise<void> => {
    try {
      const response = await axios.delete<Product | null>(`${DEL_API}/${id}`);
      if (response !== null) {
        const updatedProducts = products.filter((product) => {
          return product.id !== id;
        });
        setProducts(updatedProducts);
        console.log("Deleted successfullyyy");
      } else {
        console.log("Wrong Hit. Failed to delete");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc] text-gray-900">
      <div className="max-w-6xl mx-auto py-12 px-6">
        {/* Products Header */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Our Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl flex flex-col justify-between"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-contain mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2 truncate">
                {product.category}
              </p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xl font-bold text-gray-800">
                  ${product.price}
                </span>
                {product.rating && (
                  <span className="text-sm text-gray-500">
                    Rating: {product.rating.rate} ({product.rating.count}{" "}
                    reviews)
                  </span>
                )}
              </div>
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => deleteProducts(product.id)}
                  className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
