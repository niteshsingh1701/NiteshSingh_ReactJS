import { useState, useEffect } from "react";
import type { Product } from "../types/product";

interface UseFetchProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
  totalProducts: number;
}

interface UseFetchProductsProps {
  limit?: number;
  page?: number;
}

export const useFetchProducts = ({ limit = 10, page = 1 }: UseFetchProductsProps = {}): UseFetchProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Product[] = await response.json();
        
        // Get total count of products
        const totalResponse = await fetch("https://fakestoreapi.com/products");
        const totalData: Product[] = await totalResponse.json();
        setTotalProducts(totalData.length);

        // Validate and sanitize data
        const validatedProducts = data.filter(
          (product) =>
            product &&
            typeof product.id === "number" &&
            typeof product.title === "string" &&
            typeof product.price === "number" &&
            typeof product.image === "string"
        );

        setProducts(validatedProducts);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch products"
        );
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit, page]);

  return { products, loading, error, totalProducts };
};
