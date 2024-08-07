import "./Pancakes.css";
import axios from 'axios';
import { useState, useEffect } from "react";

function Pancakes() {
  const [pancakes, setPancakes] = useState([]);

  useEffect(() => {
    const fetchPancakes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/pancakes');
        setPancakes(response.data);
      } catch (error) {
        console.error('Error fetching pancakes data:', error);
      }
    };
    fetchPancakes();
  }, []);

  return (
    <div className="pancakes">
      {pancakes.map((pancake) => (
        <div key={pancake.id}>
          <img src={pancake.img} alt={pancake.title} />
          <h2>{pancake.title}</h2>
          <p>Price: ${pancake.price}</p>
          <p>{pancake.info}</p>
          <button>Add</button>
        </div>
      ))}
    </div>
  );
}

export default Pancakes;
