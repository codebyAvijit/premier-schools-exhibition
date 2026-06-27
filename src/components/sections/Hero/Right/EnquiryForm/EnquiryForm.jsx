import "./EnquiryForm.css";

import Button from "../../../../common/Button/Button";
import arrowIcon from "../../../../../assets/svg/arrow.svg";

const EnquiryForm = () => {
  return (
    <div className="enquiry-form">
      <h2 className="enquiry-form__title">Enquire Now</h2>

      <form className="enquiry-form__form">
        <input type="text" placeholder="Parent's Name" />

        <input type="tel" placeholder="Phone Number" />

        <input type="text" placeholder="Which grade are you looking for?" />

        <Button icon={arrowIcon}>Submit</Button>
      </form>
    </div>
  );
};

export default EnquiryForm;
