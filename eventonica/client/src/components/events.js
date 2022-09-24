import React, { useEffect, useState, useReducer } from "react";
import DeleteEvent from "./deleteEvent"
import { API_URL } from "../constants.js"

const event1 = {
  id: "1",
  name: "Birthday",
  date: "1970-05-10",
  description: "Birthday party for Pops",
  category: "Celebration",
};

const event2 = {
  id: "2",
  name: "Birthday",
  date: "1977-08-09",
  description: "Birthday party for Mom",
  category: "Celebration",
};

const event3 = {
  id: "3",
  name: "Express Study Session",
  date: "2022-10-01",
  description: "A chance to study for using Express",
  category: "Education",
};

const initialState = {
  id: "",
  name: "",
  date: "",
  description: "",
  category: "",
};
function init(initialState){
    return {id: "", name: "", date:""};
 };

const reducer = (state, action) => {
  console.log(action, "this is the action");
  switch (action.type) {
    case "editName":
      console.log("Logged if the editName action is being dispatched");
      return { ...state, name: action.payload };

    case "editDescription":
      return { ...state, description: action.payload };

    case "editCategory":
      return { ...state, category: action.payload };

    case "editId":
      return { ...state, id: action.payload };

    case "editDate":
      return { ...state, date: action.payload };
    
    case "reset":
        return init(action.payload);

    default:
      return state;
  }
};


const Events = () => {
  const [events, setEvents] = useState([event1, event2, event3]);
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const getEvents = () => {
    fetch(`${API_URL}/events`)
      .then((res) => res.json())
      .then((parsResponse) =>  setEvents(parsResponse))
      .catch( (error) => console.log(error))
      
  };
  
  useEffect(() => {
    // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    getEvents();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, state]);
  };
  return (
    <section className="event-management">
      <h2>Event Management</h2>
      <div>
        <h3>All Events</h3>
        <table id="events-list">
          {/* Display all Events here */}
          {events.map((event, index) => {
            return (
              <tr key={index}>
               <td> <strong>Id:</strong> {event.id}, <strong>Name:</strong> {event.name}, <strong>Date:</strong> {event.date},
                <strong>Description:</strong> {event.description},</td>
              </tr>
            );
          })}
        </table>

        <h3>Add Event</h3>
        <form id="add-event" action="#" onSubmit={handleSubmit}>
          <fieldset>
            <label>Name</label>

            <input
              type="text"
              id="add-event-name"
              placeholder="Virtual corgi meetup"
              value={state.name}
              onChange={(e) =>
                dispatch({
                  type: "editName",
                  payload: e.target.value,
                })
              }
            />
            <br />
            <label>Id</label>
            <input
              type="text"
              id="add-event-id"
              placeholder="Enter your id"
              value={state.id}
              onChange={(e) =>
                dispatch({
                  type: "editId",
                  payload: e.target.value,
                })
              }
            />
            <label>description</label>
            <input
              type="text"
              id="add-event-description"
              placeholder="Enter your Description"
              value={state.description}
              onChange={(e) =>
                dispatch({
                  type: "editDescription",
                  payload: e.target.value,
                })
              }
            />

            <label>Date</label>
            <input
              type="date"
              id="add-event-date"
              placeholder="Enter your Date"
              value={state.date}
              onChange={(e) =>
                dispatch({
                  type: "editDate",
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          {/* Add more form fields here */}
          <input class="submit" type="submit" />
        </form>
      </div>
    <DeleteEvent events={events} setEvents={setEvents} />
    </section>
  );
};
export default Events;
