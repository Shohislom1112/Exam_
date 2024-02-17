import Says from "./Says";
import "./style.scss"

const SaysBlock = () => {
  return ( 
    <section className="says-block">
      <h2 className="says-block__title title"><span>Customer</span> Say</h2>
      <div className="says-cards">
        <Says />
      </div>
    </section>
  );
}
 
export default SaysBlock;