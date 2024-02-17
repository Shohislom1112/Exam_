import './style.scss';
import mark from "./img/BookMark.svg"

const Restaurants = ({name, type, time, rating, img}) => {

  return (
        <div className="rest__card">
          <img className="rest__image" src={img} alt="title"/>
          <div className="rest-typeBlock" id='rest-typeBlock' style={type === "Healthy" ? {backgroundColor: "#F7EDD0"} : {backgroundColor: "#F7C5BA"}}>
            <p className="rest__type" id='rest__type' style={type === "Healthy" ? {color: "#DAA31A"} : {color: "#FB471D"}}>{type}</p>
          </div>
          <article>
            <div className="rest-info">
              <h3 className="rest__name">{name}</h3>
              <div className="rest-criteria">
                <p className="rest__time">{time} &#8226;</p>
                <p className="rest__rating">{rating}</p>
              </div>
            </div>
            
            <form className='mark-button'>
              <input type='checkbox'/>
              <img className="mark__image" src={mark} alt="title"/>
            </form>
            
          </article>
        </div>
  );
}
 
export default Restaurants;