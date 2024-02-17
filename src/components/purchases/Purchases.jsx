import './style.scss';

const Purchases = ({name, status, time, img}) => {
  return (
    <div className="purchases-card">
      <div className="purchases-card-info">
        <img className="purchases__image" src={img} alt="food" />
        <article>
          <p className="purchases__title">{name}</p>
          <p className="purchases__text" style={status === "Cancelled" ? {color: "#F1534E"} : status === "Delivered" ? {color: "#309D5B"} : {color: "#1A202C"}}>{status}</p>
        </article>
      </div>
      <p className="purchases__time">{time}</p>
    </div>
  );
}
 
export default Purchases;