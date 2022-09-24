// import { useState } from "react";

// const DeleteUser = ({users, setUsers}) => {
//     const [userId, setUserId] = useState("");
  
//     const deleteUser = (e) => {
//       e.preventDefault();
//       if (!userId || userId < 1) {
//         alert("Please enter a valid user ID.");
//       }
//       const newUsers = users.filter((i) => i.id !== userId);
//       setUsers(newUsers);
//       setUserId("");
//     };
//   return (
//     <div>
//       <h3>Delete User</h3>
//       <form id="delete-user" action="#" onSubmit={deleteUser}>
//         <fieldset>
//           <label>User ID</label>
//           <input
//             type="text"
//             id="delete-user-id"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//           />
//         </fieldset>
//         <input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default DeleteUser;