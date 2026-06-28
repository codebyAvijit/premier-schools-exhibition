import "./Appointments.css";

import Button from "../../common/Button/Button";
import appointmentImage from "../../../assets/images/appointments/appointmentImage.png";
import arrowIcon from "../../../assets/svg/arrow.svg";

const Appointments = () => {
  return (
    <section className="appointments">
      <div className="appointments__left">
        <p className="appointments__subtitle">
          Exciting Opportunities for Parents!
        </p>

        <h2 className="appointments__title">
          Pre-schedule Your School Appointments
        </h2>

        <p className="appointments__description">To Avoid Rush</p>

        <Button icon={arrowIcon}>PRE-SCHEDULE NOW</Button>
      </div>

      <div className="appointments__right">
        <img src={appointmentImage} alt="School Appointment" />
      </div>
    </section>
  );
};

export default Appointments;
