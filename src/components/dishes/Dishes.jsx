import './style.scss';

const Dishes = ({name, type, time, rating, price, img}) => {
  return (
    <div className="dish__card">
      <form className='favorite-button'>
        <input type='checkbox'/>
        <svg className="favorite__image" width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.363281 6.66277C0.363281 3.27527 3.33513 0.666992 6.82344 0.666992C8.62159 0.666992 10.2039 1.51012 11.3393 2.60107C12.4747 1.51012 14.057 0.666992 15.8551 0.666992C19.3434 0.666992 22.3153 3.27527 22.3153 6.66277C22.3153 8.98325 21.3257 11.0239 19.9547 12.7488C18.5861 14.4707 16.7959 15.9322 15.0818 17.1197C14.427 17.5732 13.7647 17.9917 13.1585 18.3004C12.5893 18.5903 11.9348 18.8558 11.3393 18.8558C10.7438 18.8558 10.0893 18.5903 9.52007 18.3004C8.91388 17.9917 8.25153 17.5732 7.59682 17.1197C5.88271 15.9322 4.09245 14.4707 2.72384 12.7488C1.35285 11.0239 0.363281 8.98325 0.363281 6.66277ZM6.82344 2.54859C4.21523 2.54859 6.66277C2.24488 8.42332 2.99224 10.0625 4.19684 11.578C5.40382 13.0966 7.02782 14.4365 8.66835 15.573C9.28912 16.003 16.003 20.4337 8.42332 20.4337 6.66277C20.4337 4.4667 18.4633 2.54859 15.8551 2.54859C14.3572 2.54859 12.9585 3.44351 12.0851 4.57937C11.907 4.81098 11.6314 4.94671 11.3393 4.94671C11.0471 4.94671 10.7715 4.81098 10.5935 4.57937C9.72011 3.44351 8.32139 2.54859 6.82344 2.54859Z" fill="#DBD9EE"></path>
        </svg>
      </form>
      <img className="dish__image" src={img} alt="title"/>
      <div className="dish-typeBlock" id='dish-typeBlock' style={type === "Healthy" ? {backgroundColor: "#F7EDD0"} : type === "Trending" ? {backgroundColor: "#F7C5BA"} : {backgroundColor: "#98FB98"}}>
        <p className="dish__type" id='dish__type' style={type === "Healthy" ? {color: "#DAA31A"} : type === "Trending" ? {color: "#FB471D"} : {color: "#309D5B"}}>{type}</p>
      </div>
      <article>
        <div className="dish-info">
          <h3 className="dish__name">{name}</h3>
          <div className="dish-criteria">
            <p className="dish__time">{time} &#8226;</p>
            <p className="dish__rating">{rating}</p>
          </div> 
          <div className="dish-buy">
            <p className="dish__price">${price}<span>.99</span></p>
            <button className="dish__button"></button>
          </div>
          
        </div>
      </article>
    </div>
  );
}
 
export default Dishes;