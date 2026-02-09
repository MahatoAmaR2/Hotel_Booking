import { CiSearch } from "react-icons/ci";

import "../App.css";
const Hero = () => {
  return (
    <header className="section__container header__container">
      <div className="header__image__container">
        <div className="header__content">
          <h1>Enjoy Your Dream Vacation</h1>
          <p>Book Hotels, Flights and stay packages at lowest price.</p>
        </div>
        <div className="booking__container">
          <form>
            <div className="form__group">
              <div className="input__group">
                <input type="text" />
                <label>Location</label>
              </div>
              <p>Where are you going?</p>
            </div>
            <div className="form__group">
              <div className="input__group">
                <input type="text" />
                <label>Check In</label>
              </div>
              <p>Add date</p>
            </div>
            <div className="form__group">
              <div className="input__group">
                <input type="text" />
                <label>Check Out</label>
              </div>
              <p>Add date</p>
            </div>
            <div className="form__group">
              <div className="input__group">
                <input type="text" />
                <label>Guests</label>
              </div>
              <p>Add guests</p>
            </div>
          </form>
          <button className="btn">
            <CiSearch />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
