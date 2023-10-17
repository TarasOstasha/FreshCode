import { FaRegTrashCan } from "react-icons/fa6";

function UserListItem(props) {
  const { user: u, index, removeUser } = props;
  console.log(u.id)
  return (
    <li key={u.id}>
      <img width="50px" height="50px" src={u.photoSrc} alt={u.lastName} />
      <p>
        {u.firstName} {u.lastName}
      </p>
      <p>{u.age}</p>
      <button onClick={() => removeUser(index)}>
        <FaRegTrashCan />
      </button>
    </li>
  );
}

export default UserListItem;
