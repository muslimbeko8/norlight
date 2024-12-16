import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MyContext } from "../Context";

export default function Card_view() {
  const { state } = useContext(MyContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const product = state.products?.find((p) => p.id.toString() === id);
  
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-center text-gray-500">Product not found.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <button
        className="mb-4 px-4 py-2 "
        onClick={() => navigate(-1)}
      >
        {"<"}-- Go Back
      </button>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="p-8 rounded-t-lg h-[300px] w-full object-contain"
          src={product.image}
          alt={product.title}
        />
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {product.description}
          </p>
          <div className="flex items-center mt-2.5 mb-5">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              Rating: {product.rating.rate}
            </span>
          </div>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
}
