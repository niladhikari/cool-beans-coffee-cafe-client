import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, SetUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = users.filter((user) => user._id !== id);
              SetUsers(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="my-20 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-medium mb-6">
        Users     {/* //#A1234f */}
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl font-bold">
                <th>Id</th>
                <th>Email</th>
                <th>Create At</th>
                <th>Last Logged In</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user) => (
                <tr className="text-base font-medium" key={user._id}>
                  <th>{user._id}</th>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>{user.lastLoggedAt}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
