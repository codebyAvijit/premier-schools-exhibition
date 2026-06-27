import EventCard from "./EventCard";
import { events } from "../../../../../constants/events";

import "./EventCards.css";
// console.log("hi");
// console.log(events);
const EventCards = () => {
  return (
    <div className="event-cards">
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  );
};

export default EventCards;
