import "./ChooseSchool.css";

import { chooseSchoolCards } from "../../../constants/chooseSchools";

const ChooseSchool = () => {
  return (
    <section className="choose-school">
      <div className="container">
        <h2 className="choose-school__title">
          Choose the School That Fits You Best
        </h2>

        <div className="choose-school__grid">
          {chooseSchoolCards.map((card, index) => (
            <article key={index} className="choose-school__card">
              <img src={card} alt={`School ${index + 1}`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseSchool;
