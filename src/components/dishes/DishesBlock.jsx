import Dishes from "./Dishes";
import { dishes } from "../../helpers/dishes";

const DishesBlock = () => {
  return (
    <section className="dish-block">
    <h2 className="dish__title title">Our Top <span>Dishes</span></h2>
      <div className="dish-cards">
        {dishes.map((dish, index) => {
          return <Dishes 
            key={index} 
            name={dish.name} 
            type={dish.type} 
            time={dish.time} 
            rating={dish.rating} 
            price={dish.price}
            img={dish.img}
          />
        })}
      </div>

      <button className="dish__viewButton">
      <p>View All</p>
      </button>
      
  </section>
  );
}
 
export default DishesBlock;