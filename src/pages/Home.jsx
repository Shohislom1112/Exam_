import trustpilot from "../img/trustpilot.svg"
import star from "../img/star.svg"
import Food from "../components/food/Food";
import Phone from "../components/phone/Phone";
import RestaurantsBlock from "../components/restaurants/RestaurantsBlock";
import DishesBlock from "../components/dishes/DishesBlock";
import PurchasesBlock from "../components/purchases/PurchasesBlock";
import SaysBlock from "../components/says/SaysBlock";
import Sale from "../components/sale/Sale";

function Stars() {
  const elements = [];

  for (let i = 0; i < 5; i++) {
    elements.push(<img className="rating__star" key={i} src={star} alt="star"/>);
  }

  return elements;
}

const Home = () => {
  return (
    <main className="main">
      <div className="container">
        <section className="banner">
          <div className="banner-info">
            <p className="banner__subtitle">OVER 1000 USERS</p>
            <h1 className="banner__title title">Enjoy Foods All Over The <span>World</span></h1>
            <p className="banner__text">EatLy help you set saving goals, earn cash back offers, Go to disclaimer for 
            more details and get paychecks up to two days early. <span>Get a $20 bonus.</span></p>
            <div className="banner-buttons">
              <button className="banner__button start">Get Started</button>
              <button className="banner__button pro">Go Pro</button>
            </div>
            <div className="banner-rating">
              <img className="rating__trustpilot" src={trustpilot} alt="trustpilot"/>
              <div>
                <Stars />
              </div>
              <p className="rating__score">4900+</p>
            </div>
          </div>
          <Food />
        </section>
      </div>

      <section className="statistics">
      <div className="container">
          <div className="statistics-info">
            <article>
              <h2 className="statistics__title">10K+</h2>
              <p className="statistics__text">Satisfied Costumers
              All <br/> Great Over The World </p>
            </article>
            <article>
              <h2 className="statistics__title">4M</h2>
              <p className="statistics__text">Healthy Dishes Sold <br/> Including Milk Shakes Smooth</p>
            </article>
            <article>
              <h2 className="statistics__title">99.99%</h2>
              <p className="statistics__text">Reliable Customer Support <br/> We Provide Great Experiences</p>
            </article>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="mobileVertion">
          <Phone />
          <article className="mobileVertion-info">
            <h2 className="mobileVertion__title title">Premium <span>Quality</span> For Your Health</h2>
            <ul className="mobileVertion__list">
              <li className="mobileVertion__mark">
                <p className="mobileVertion__text">Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</p>
              </li>
              <li className="mobileVertion__mark">
                <p className="mobileVertion__text">These foods promote overall wellness by support healthy digestion and boosting immunity.</p>
              </li>
            </ul>
            <button className="mobileVertion__button">
              <p>Download</p>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.55469 13.5469H22.3588" stroke="white" stroke-width="2.25773" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.4561 5.64453L22.3581 13.5466L14.4561 21.4487" stroke="white" stroke-width="2.25773" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </article>
        </section>

        <RestaurantsBlock />
        <DishesBlock />
        <PurchasesBlock />
        <SaysBlock />
        <Sale />
      </div>
    </main>
  );
}
 
export default Home;