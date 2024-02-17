import Purchases from "./Purchases";
import { purchases } from "../../helpers/purchases";

const PurchasesBlock = () => {
  return ( 
    <section className="purchases">
      <div className="purchases-info">
        <h2 className="purchases__info-title title">Control <span>Purchases</span> <br/>Via Dashboard</h2>
        <div className="purchases-cards">
          {purchases.map((purchas, index) => {
            return <Purchases 
              key={index} 
              name={purchas.name} 
              status={purchas.status} 
              time={purchas.time}
              img={purchas.img}
            />
          })}
        </div>
      </div>
      <div  className="purchases-stats">
        <div className="purchases-stats-date">
          <h3 className="purchases__stats-title">Purchases</h3>
          <select className="purchases__date" name="purchases__date">
            <option value="month">This month</option>
            <option value="week">This week</option>
            <option value="year">This year</option>
          </select>
        </div>

        <div className="purchases-progressCards">
          <div className="purchases-progress__card">
            <article className="purchases-progress__info">
              <div>
                <div className="purchases-expense-imageBlock">
                </div>
                <p className="purchases-progress__text"><span>Expense</span> <br/>
                Increased By 10%</p>
              </div>
              <p className="purchases-progress__price">$409.00</p>
            </article>
            <div className="expense-bar"></div>
          </div>

          <div className="purchases-progress__card">
            <article className="purchases-progress__info">
              <div>
                <div className="purchases-vocher-imageBlock">
                </div>
                <p className="purchases-progress__text"><span>Vocher Usage</span> <br/>
                Increased By 5%</p>
              </div>
              <p className="purchases-progress__price">$45.78</p>
            </article>
            <div className="vocher-bar"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
 
export default PurchasesBlock;