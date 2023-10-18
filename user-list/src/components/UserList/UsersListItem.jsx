import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

//let userBgColorFlag = true;
//let toggleEvent = () => userBgColorFlag = !userBgColorFlag;

function UserListItem(props) {
  const { user: u, index, removeUser, selectUser } = props;
  
  const userStyles = {
    backgroundColor: u.isSelected ? '' : '#ede0ff'
  }

  return (
    <li style={ userStyles } className="list" onClickCapture={ () => selectUser(index) }>
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
