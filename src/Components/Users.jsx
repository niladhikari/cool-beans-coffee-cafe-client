import { useLoaderData } from "react-router-dom";


const Users = () => {
  const loadedUsers = useLoaderData();
  return (
    <div>
      <div className="my-20 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-medium mb-6">Users : {loadedUsers.length}</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl font-bold">
                <th></th>
                <th>Email</th>
                <th>Create At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {loadedUsers.map((user) => (
                <tr className="text-base font-medium" key={user._id}>
                  <th>1</th>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>Blue</td>
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
