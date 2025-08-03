import React from "react";
import { useTheme } from "../context/ThemeContext";
import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { theme } = useTheme();

  const getCardClasses = () => {
    switch (theme) {
      case "light":
        return "bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-md";
      case "dark":
        return "bg-gray-800 text-white border border-gray-700 shadow-md hover:shadow-lg";
      case "colorful":
        return "bg-gradient-to-br from-yellow-200 to-pink-200 text-purple-900 border border-purple-300 shadow-lg hover:shadow-xl";
      default:
        return "bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-md";
    }
  };

  const getTextStyle = () => {
    switch (theme) {
      case "light":
        return { fontFamily: "Roboto, sans-serif" };
      case "dark":
        return { fontFamily: "Merriweather, serif" };
      case "colorful":
        return { fontFamily: "Pacifico, cursive" };
      default:
        return { fontFamily: "Roboto, sans-serif" };
    }
  };

  // Sanitize product title and description to prevent XSS
  const sanitizeText = (text: string, maxLength: number = 50) => {
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  return (
    <div
      className={`rounded-lg p-4 transition-all duration-300 transform cursor-pointer ${getCardClasses()}`}
    >
      {/* Product Image */}
      <div className="flex items-center justify-center w-full mb-4 overflow-hidden bg-gray-100 rounded-md aspect-square">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain max-w-full max-h-full transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/300x300?text=No+Image";
          }}
        />
      </div>

      {/* Product Info */}
      <div style={getTextStyle()}>
        <h3
          className={`font-semibold mb-2 ${
            theme === "dark" ? "text-lg" : "text-base"
          }`}
        >
          {sanitizeText(product.title, 60)}
        </h3>
        <p
          className={`mb-2 opacity-75 ${
            theme === "colorful" ? "text-sm" : "text-sm"
          }`}
        >
          {sanitizeText(product.description, 100)}
        </p>
        <div className="flex items-center justify-between">
          <span
            className={`font-bold ${theme === "dark" ? "text-xl" : "text-lg"}`}
          >
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-sm opacity-75">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
