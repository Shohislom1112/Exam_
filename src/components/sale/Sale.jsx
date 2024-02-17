import './style.scss';

const Sale = () => {
  return (
    <section className="sale">
      <h2 className="sale__title">GET 50%</h2>
      <form className="sale-form">
        <input className="sale__input" placeholder="Enter Your Email Address"/>
        <button className="sale__button">subscribe</button>
      </form>
    </section>
  );
}
 
export default Sale;