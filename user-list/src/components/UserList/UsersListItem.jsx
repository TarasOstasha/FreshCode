import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import styles from "./Style.module.css";

function UserListItem(props) {
  const { user: u, index, removeUser, selectUser } = props;

  const userStyles = {
    backgroundColor: u.isSelected ? "#ede0ff" : "",
    border: u.isSelected ? "2px solid #ede0ff" : ""
  };

  return (
    <li
      style={userStyles}
      className={styles.list}
      onClickCapture={() => selectUser(index)}
    >
      <img src={u.photoSrc} alt={u.lastName} />
      <div className="style.infoContainer">
        <h4>
          {u.firstName} {u.lastName}
        </h4>
        <p>{u.age}</p>
        <button className={ u.isSelected===true ? styles.removeUser : styles.removeUserActive } onClick={() => removeUser(index)}>
          <FaRegTrashCan />
        </button>
      </div>
    </li>
  );
}

export default UserListItem;
