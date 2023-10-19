import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import styles from './Style.module.css';

function UserListItem(props) {
  const { user: u, index, removeUser, selectUser } = props;
  
  const userStyles = {
    backgroundColor: u.isSelected ? '' : '#ede0ff'
  }

  return (
    <li style={ userStyles } className={styles.list} onClickCapture={ () => selectUser(index) }>
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
