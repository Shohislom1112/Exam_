import phone from './img/iPhone13pm.png';
import './style.scss';

const Phone = () => {
  return (
    <div className='phone-block'>
      <img className='phone__image' src={phone} alt="phone"/>
    </div>
  );
}
 
export default Phone;