// src/components/Juice.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetJuicesQuery } from '../../slices/juiceApiSlice';
import "./Juices.css";
function Juice() {
  const { data: juices, isLoading, error } = useGetJuicesQuery();

  return (
    <>
      {isLoading ? (
        <h2>Loading Juices...</h2>
      ) : error ? (
        <div>{error.data?.message || error.error}</div>
      ) : (
        <div className="juices">
          {juices.map((juice) => (
            <div key={juice.id}>
              <Link to={`/juice/${juice.id}`}>
                <img src={juice.image} alt={juice.title} />
                <h2>{juice.title}</h2>
              </Link>
              <p>Price: ${juice.price}</p>
              <p>{juice.info}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Juice;
