import "./EventCard.css";

const EventCard = ({ venue, address, date, time }) => {
  return (
    <article className="event-card">
      <div className="event-card__left">
        <h4>{venue}</h4>

        <p>{address}</p>
      </div>

      <div className="event-card__right">
        <h4>{date}</h4>

        <p>{time}</p>
      </div>
    </article>
  );
};

export default EventCard;
