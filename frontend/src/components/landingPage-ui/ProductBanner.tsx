import React, { useEffect, useRef, useState } from "react";
import { getTrandingProductsThree } from "../../api/product";
import { useNavigate } from "react-router-dom";

interface ApiResponse {
  trending: [];
  views: [];
  likes: [];
  ratings: [];
}

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState("trending");
  const [productData, setProductData] = useState<ApiResponse | undefined>();
  const navigate = useNavigate();
  const initialRender = useRef(true);

  // Fetch products from the API
  const fetchProductData = async () => {
    try {
      const response = await getTrandingProductsThree();
      setProductData(response);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      fetchProductData();
    }
  }, []);

  const renderProductCards = (products: any[], filter: string) => {
    return products?.map((product: any) => (
      <div
        className={`relative p-4 border rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow ${activeTab === "all" || activeTab === filter ? "block" : "hidden"
          }`}
        key={product.productName}
      >
        <img
          src={product.thumbnailUrl}
          alt={product.productName}
          className="w-full h-56 object-cover rounded-t-lg"
        />
        <div className="p-4 text-center">
          <span className="block mb-2 text-sm font-medium text-primary">
            {product.category}
          </span>
          <h3 className="mb-2 text-lg font-bold text-gray-800 dark:text-gray-200">
            {product.productName}
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Price: ${product.discountedPrice ?? product.price}
          </p>
          <button
            className="w-full py-2 mt-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            onClick={() => navigate(`/product?query=${product._id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    ));
  };

  return (
    <section className="pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4" id="product">
        <div className="text-center mb-12">
          <span className="text-lg font-semibold text-blue-600">
            Your One-Stop Shop for Bulk Orders
          </span>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">
            Highlighted Products
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore our premium selection of products for bulk orders. From
            electronics to home essentials, we have it all in one place.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <ul className="flex space-x-4">
            {[
              { label: "Trending", value: "trending" },
              { label: "Top Views", value: "views" },
              { label: "Top Likes", value: "likes" },
              { label: "Top Ratings", value: "ratings" },
            ].map((tab) => (
              <li key={tab.value}>
                <button
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.value
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800 border border-gray-300 hover:bg-blue-100"
                    }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === "trending" && renderProductCards(productData?.trending ?? [], "trending")}
          {activeTab === "views" && renderProductCards(productData?.views ?? [], "views")}
          {activeTab === "likes" && renderProductCards(productData?.likes ?? [], "likes")}
          {activeTab === "ratings" && renderProductCards(productData?.ratings ?? [], "ratings")}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
