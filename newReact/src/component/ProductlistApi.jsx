import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router";

function ProductsListApi() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [search]);

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-5xl font-bold text-blue-500 text-center mb-10">
        Product List
      </h1>
      <div className="flex  justify-center items-center mb-6">
        <input
          className="w-xl h-10 border rounded-lg px-3"
          type="text"
          placeholder="Search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <img
          className="w-20 h-20  justify-center items-center"
          src="search.png"
          alt=""
        /> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden p-4"
              >
                <Skeleton height={208} borderRadius={16} />
                <Skeleton height={24} className="mt-4" />
                <Skeleton count={2} className="mt-2" />
                <div className="flex justify-between mt-4">
                  <Skeleton width={80} height={30} />
                  <Skeleton width={100} height={40} />
                </div>
              </div>
            ))
          : products.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full bg-gray-200 h-52 m-4 mr-4 shadow-md rounded-2xl object-cover"
                />

                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2 line-clamp-1">
                    {product.title}
                  </h2>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-green-600">
                      ${product.price}
                    </span>

                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Buy Now
                    </button>
                  </div>

                  <div className="mt-3 text-sm text-yellow-500">
                    rating: {product.rating}
                  </div>
                </div>
              </div>
            ))}
      </div>
      {!loading && products.length === 0 && (
        <div className="text-center text-3xl font-bold text-red-500 mt-10">
          No Products Found !!
        </div>
      )}
    </div>
  );
}

export default ProductsListApi;
