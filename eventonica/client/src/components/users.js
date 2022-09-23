import React, { useEffect, useState } from "react";
import { API_URL } from "../constants.js";
// import DeleteUser from "./DeleteUser";

// const marlin = {name: "Marlin", email: "marlin@gmail.com", id: "1"};
// const nemo = {name: "Nemo", email: "nemo@gmail.com", id: "2"};
// const dory = {name: "Dory", email: "dory@gmail.com", id: "3"};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 

  const handleSubmit = async (e) => {
    
    e.preventDefault();
        const newUser = {name: name, email: email };
        setUsers([...users, newUser])
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
  };
        
         
  

  //Delete a user 
  const deleteUser = async (deleteId) => {
    let response = await fetch(`http://localhost:4000/users/${deleteId}`, {
      method: "DELETE",
    });
    await response.json();

    const deleteUsers = users.filter((user) => user.id !== deleteId);
    console.log(deleteUsers);
    setUsers(deleteUsers);
  };
    const getUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    const user = await response.json();
    setUsers(user);
  };

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <section className="user-management">
      <h2>User Management</h2>

      <ul id="users-list">
        {users.map((user, index) => {
          return (
            <li key={index}>
              <strong>ID:</strong> {user.id}
              <br />
              <strong>Name:</strong> {user.name}
              <br />
              <strong>Email:</strong> {user.email}
            
            <br />
            <button>
                <span
                  className="material-symbols-outlined"
                  onClick={() => deleteUser(user.id)}>
                  delete
                </span>
              </button>
              </li>
          );
        })}
      </ul>

      <div>
        <h3>Add User</h3>
        <form id="add-user" action="#" onSubmit={handleSubmit}>
          <fieldset>
            <p>
              <label>Name</label>
              <br />
              <input
                type="text"
                id="add-user-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              <label>Email</label>
              <br />
              <input
                type="text"
                id="add-user-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
      
          </fieldset>
          <input type="submit" value="Add" onClick={handleSubmit} />
        </form>
      </div>

  
    </section>
  );
};

export default Users;