import { useUser } from "../hooks/useUser";
import { UserRow } from "./UserRow";
export const UsersPage = () => {
  const { users, nextPage, prevPage } = useUser();

  return (
    <>
      <h3>Usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <button onClick={prevPage}>Preview</button>
      <button onClick={nextPage}>Next</button>
    </>
  );
};


