import "./ParticipatingSchools.css";
import { schoolLogos } from "../../../constants/schoolsLogos";
// console.log(schoolLogos);
const ParticipatingSchools = () => {
  return (
    <section className="schools">
      <div className="container">
        <h2>Participating Schools</h2>

        <div className="schools__grid">
          {schoolLogos.map((logo, index) => (
            <div key={index} className="schools__card">
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipatingSchools;
