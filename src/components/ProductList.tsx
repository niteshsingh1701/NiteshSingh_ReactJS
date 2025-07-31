import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
  const { products, loading, error } = useFetchProducts();
  const { theme } = useTheme();

  const getGridClasses = () => {
    switch (theme) {
      case "light":
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6";
      case "dark":
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8";
      case "colorful":
        return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4";
      default:
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6";
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-current"></div>
        <span className="ml-3">Loading products...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 mb-4">⚠️ Error loading products</div>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No products available</p>
      </div>
    );
  }

  return (
    <section className="mt-8">
      <h2
        className={`text-2xl font-bold mb-6 ${
          theme === "dark"
            ? "text-white"
            : theme === "colorful"
            ? "text-purple-900"
            : "text-gray-900"
        }`}
        style={
          theme === "colorful"
            ? { fontFamily: "Pacifico, cursive" }
            : theme === "dark"
            ? { fontFamily: "Merriweather, serif" }
            : { fontFamily: "Roboto, sans-serif" }
        }
      >
        Featured Products
      </h2>
      <div className={getGridClasses()}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
