import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
import "./Juices.css";
function Juices() {
  const [Juices, setJuices] = useState([]);

  useEffect(() => {
    const fetchJuices = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/juices');
        setJuices(response.data);
      } catch (error) {
        console.error('Error fetching pancakes data:', error);
      }
    };
    fetchJuices();
  }, []);

  return (
    <div className="pancakes">
      {Juices.map((Juice) => (
        <div key={Juice.id}>
          <img src={Juice.img} alt={Juice.title} />
          <h2>{Juice.title}</h2>
          <p>Price: ${Juice.price}</p>
          <p>{Juice.info}</p>
          <button>Add</button>
        </div>
      ))}
    </div>
  );
}

export default Juices;