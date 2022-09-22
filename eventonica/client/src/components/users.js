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
  const deleteUser = async (id) => {
    const rawResponse = await fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    });
    const content = await rawResponse.json();
    setUsers(content);
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
        {users.map((user, ind) => {
          return (
            <li key={ind}>
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
// const Users = () => {
//   const [users, setUsers] = useState([]);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [id, setId] = useState("");

//   const getUsers = async () => {
//     const response = await fetch(`${API_URL}/users`);
//     const user = await response.json();
//     setUsers(user);
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newUser = { id: id, name: name, email: email };
//     setUsers([...users, newUser])
//     const rawResponse = await fetch(`${API_URL}/users`, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     });
//     const content = await rawResponse.json();

//     setUsers([...users, content]);
//     setName("");
//     setEmail("");
//     setId("");
//   };

//   // Delete a user
//   const deleteUser = async (deleteUser) => {
//     let response = await fetch(`${API_URL}/users/${deleteUser}`, {
//       method: "DELETE",
//     });
//     await response.json();
//     // delete functionality
//     const deleteUsers = users.filter((user) => user.id !== deleteUser);
//     console.log(deleteUsers);
//     setUsers(deleteUsers);
//   };

//   const usersHeaders = () => {
//     let headerElement = ["Id", "Name", "Email"];

//     return headerElement.map((ele, index) => {
//       return <th key={index}>{ele}</th>;
//     });
//   };

//   const usersRows = () => {
//     return users.map((user) => {
//       return (
//         <tr key={user.id}>
//           <td>{user.id}</td>
//           <td>{user.name}</td>
//           <td>{user.email}</td>

//           <td className="material-symbols-outlined">
//             <button onClick={() => DeleteUser(user.id)}>Delete</button>
//           </td>
//         </tr>
//       );
//     });
//   };
//   return (
//     <section className="user-management">
//       <h2>User Management</h2>
//       <h3>List of Users</h3>
//       <table className="listUser">
//         <thead>
//           <tr>{usersHeaders()}</tr>
//         </thead>
//         <tbody>{usersRows()}</tbody>
//       </table>

//       <div>
//         <h3>Add User</h3>
//         <form id="add-user" action="#" onSubmit={handleSubmit}>
//           <fieldset>
//             <label>Name</label>
//             <input
//               type="text"
//               id="add-user-name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />

//             <label>Email</label>
//             <input
//               type="text"
//               id="add-user-email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </fieldset>

//           <input type="submit" value="Add" />
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Users;
