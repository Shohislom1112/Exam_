import Restaurants from "./Restaurants";
import { restaurants } from "../../helpers/restaurants";

const RestaurantsBlock = () => {
  return (
    <section className="rests-block">
    <h2 className="rests__title title">Our Top <span>Restaurants</span></h2>
      <div className="rests-cards">
        {restaurants.map((restaurant, index) => {
          return <Restaurants 
            key={index} 
            name={restaurant.name} 
            type={restaurant.type} 
            time={restaurant.time} 
            rating={restaurant.rating} 
            img={restaurant.img}
          />
        })}
      </div>

      <button className="rests__viewButton">
      <p>View All</p>
      </button>
      
  </section>
  );
}
 
export default RestaurantsBlock;