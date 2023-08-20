
import "./Pancakes.css"
import pancakesapi from "../../pancakesapi.json"



function Pancakes() {
  return (
    <div className="pancakes">
      {pancakesapi.map((pancake, index) => (
      <div >
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


export default Pancakes