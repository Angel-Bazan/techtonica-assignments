import React, { useEffect, useState } from "react";
import { API_URL } from "../constants.js";

const Users = () => {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const getUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    const user = await response.json();
    setUsers(user);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { id, name, email };
    const rawResponse = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const content = await rawResponse.json();

    setUsers([...users, content]);
    setName("");
    setEmail("");
    setId("");
  };

  // Delete a user
  const DeleteUser = async (deleteUser) => {
    let response = await fetch(`${API_URL}/users/${deleteUser}`, {
      method: "DELETE",
    });
    await response.json();
    // delete functionality
    const deleteUsers = users.filter((user) => user.id !== deleteUser);
    console.log(deleteUsers);
    setUsers(deleteUsers);
  };

  const usersRows = () => {
    let headerElement = ["Id", "Name", "Email"];

    return headerElement.map((ele, index) => {
      return <th key={index}>{ele}</th>;
    });
  };

  const usersList= () => {
    return users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>

          <span className="material-symbols-outlined">
            <button onClick={() => DeleteUser(user.id)}>Delete</button>
          </span>
        </tr>
      );
    });
  };
  return (
    <section className="user-management">
      <h2>User Management</h2>
      <h3>List of Users</h3>
      <table className="listUser">
        <thead>
          <tr>{usersRows()}</tr>
        </thead>
        <tbody>{usersList()}</tbody>
      </table>

      <div>
        <h3>Add User</h3>
        <form id="add-user" action="#" onSubmit={handleSubmit}>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              id="add-user-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email</label>
            <input
              type="text"
              id="add-user-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" value="Add" />
        </form>
      </div>
    </section>
  );
};

export default Users;
