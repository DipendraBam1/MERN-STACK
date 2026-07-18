import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-96 object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6">
        {product.title}
      </h1>

      <p className="text-gray-600 mt-4">
        {product.description}
      </p>

      <p className="text-2xl font-bold text-green-600 mt-4">
        ${product.price}
      </p>

      <p className="text-yellow-500 mt-2">
        Rating: {product.rating}
      </p>
    </div>
  );
}

export default ProductDetails;