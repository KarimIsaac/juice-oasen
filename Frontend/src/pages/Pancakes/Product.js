import "./Pancakes.css";

import { useGetProductsQuery } from "../../slices/productApiSlice";

import { Link } from "react-router-dom";

function Product() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error.data?.message || error.error}</div>
      ) : (
        <div className="pancakes">
          {products.map((product) => (
            <div key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
              </Link>
              <p>Price: ${product.price}</p>
              <p>{product.info}</p>
              <button>Add</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default Product;
