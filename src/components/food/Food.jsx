import food from './img/Food.svg'
import Graph from './img/Graph.png'
import './style.scss'

const Food = () => {
  return (
    <div className="plate">
      <div className="plate-food">
        <img className="food__image" src={food} alt="food" />
      </div>
      <div className="card-onTheWay">
        <div className="card__info">
          <img className="food__image card__image" src={food} alt="food" />
          <article>
            <p className="card__title">Chicken Hell</p>
            <p className="card__text">On The Way</p>
          </article>
        </div>
        <p className="card__time">3:09 PM</p>
      </div>
      <div className="card-stats">
        <img className="stats__image" src={Graph} alt="Graph" />
      </div>
    </div>

  );
}
 
export default Food;