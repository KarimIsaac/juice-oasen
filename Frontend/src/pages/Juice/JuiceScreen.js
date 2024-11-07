// src/screens/JuiceScreen.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetJuicesQuery } from '../../slices/juiceApiSlice';

function JuiceScreen() {
  const { id: juiceId } = useParams();
  const { data: juice, isLoading, error } = useGetJuicesQuery();

  return (
    <>
      {isLoading ? (
        <h2>Loading Juice...</h2>
      ) : error ? (
        <div>{error.data?.message || error.error}</div>
      ) : (
        <div className="juice-details">
          <img src={juice.image} alt={juice.title} />
          <h2>{juice.title}</h2>
          <p>Price: ${juice.price}</p>
          <p>{juice.info}</p>
          <button>Add to Cart</button>
        </div>
      )}
    </>
  );
}

export default JuiceScreen;
