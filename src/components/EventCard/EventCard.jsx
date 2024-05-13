import { EventCardWrapper } from "./EventCard.styled";
import { format } from "date-fns";

export function EventCard({ _id, title, description, time, organizer, onView, onRegister }) {
  return (
    <EventCardWrapper>
      <div>
        <span>{format(time, "dd.MM.yy")}</span>
        <span>{format(time, "HH:mm")}</span>
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{`organizer: ${organizer}`}</p>
      </div>
      <div>
        <button
          onClick={() => {
            onView(_id);
          }}
        >
          View
        </button>
        <button
          onClick={() => {
            onRegister(_id);
          }}
        >
          Register
        </button>
      </div>
    </EventCardWrapper>
  );
}
