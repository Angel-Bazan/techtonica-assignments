import { useEffect, useState } from "react";
import DeleteUser from "./deleteUser.js";

// const marlin = { name: "Marlin", email: "marlin@gmail.com", id: "1" };
// const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
// const dory = { name: "Dory", email: "dory@gmail.com", id: "3" };

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", id: "" });

  const set = (input) => {
    return ({ target: { value } }) => {
      setNewUser((originalValues) => ({
        ...originalValues,
        [input]: value,
      }));
    };
  };

  const getUsers = () => {
    fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((res) => setUsers(res.users));
  };
  
  useEffect(() => {
    // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    getUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
    setNewUser({ name: "", email: "", id: "" });
    setUsers([...users, newUser]);
  };

  const deleteUser = (deleteId) => {
    const newUsers = users.filter((user) => user.id !== deleteId);
    setUsers(newUsers);
  };

  return (
    <section className="user-management">
      <h2>User Management</h2>

      <ul id="users-list">
        {/* display all existing Users here */}
        {users.map((user, index) => {
          return (
            <li key={index}>
              Name: {user.name}, E-mail: {user.email}
            </li>
          );
        })}
      </ul>

      <div>
        <h3>Add User</h3>
        <form id="add-user" action="#" onSubmit={handleSubmit}>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              id="add-user-name"
              name="name"
              value={newUser.name} // changes the name
              onChange={set("name")} // handlechange function
            />
            <label>E-mail</label>
            <input
              type="text"
              id="add-user-email"
              name="email"
              value={newUser.email} // changes the email
              onChange={set("email")} // handlechange function
            />
            <label>Id</label>
            <input
              type="text"
              id="add-user-id"
              value={newUser.id}
              onChange={set("id")}
            />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" value="Add" />
        </form>
      </div>
      <DeleteUser deleteUser={deleteUser} />
    </section>
  );
};

export default Users;
