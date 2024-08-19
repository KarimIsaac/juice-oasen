import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetProductsScreenQuery } from '../../slices/productApiSlice';
const ProductScreen = () => {
  const { id: productId } = useParams();
  const { data: product, isLoading, error } = useGetProductsScreenQuery(productId);
  console.log(productId); 
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error.data?.message || error.error}</div>
      ) : (
        <div className="product-details">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <p>{product.info}</p>
          <button>Add to Cart</button>
        </div>
      )}
    </>
  );
}
export default ProductScreen;