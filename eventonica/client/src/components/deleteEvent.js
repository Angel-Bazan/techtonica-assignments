import { useState } from "react";
const DeleteEvent = ({ events, setEvents }) => {
  const [eventId, setEventId] = useState("");

  const deleteEvent = (e) => {
    e.preventDefault();//if the event does not get handle it should not behave how it has to behave 
    if (!eventId) {
      alert("Please enter a valid event ID.");
    }
    const newEvents = events.filter((i) => i.id !== eventId);//filter all the eventId that are not the same as the id that is being inputted
    setEvents(newEvents); //set Events to the newEvents 
    localStorage.setItem("events", newEvents); //store the events useState 
    setEventId(""); //Event Id starts blank 
  };
  return (
    <div>
      <h3>Delete Event</h3>
      <form id="delete-event" action="#" onSubmit={deleteEvent}>
        <fieldset>
          <label>Event ID</label>
          <input
            type="number"
            id="delete-event-id"
            min="1"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
          />
        </fieldset>
        <input class="submit" type="submit" />
      </form>
    </div>
  );
};

export default DeleteEvent;
