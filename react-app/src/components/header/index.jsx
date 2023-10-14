import React from "react";
import userIcon from "./user.png";
import logo from "./logo.png";
import styles from "./Header.module.css";

function Header(props) {
  const { isLogin, navList } = props;

  const mapLinks = (link, i) => (
    <li key={i}>
      <a href={link.href}>{link.title}</a>
    </li>
  );
  //   return (
  //     <div><img src={userIcon} alt='' /></div>
  //   )
  // --------- 1 method
  // if(isLogin) {
  //     return <img src={userIcon} alt='' />
  // } else {
  //     return <button>Login</button>
  // }
  // ------------- 2 method
  //   return (
  //     <header>
  //       {isLogin ? <img src={userIcon} alt="" /> : <button>Login</button>}
  //     </header>
  //   );
  // --------------- 3 method
  // return <header>{ isLogin && <img src={ userIcon } alt="" /> }</header>

  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <ul>{navList.map(mapLinks)}</ul>
      {isLogin ? (
        <img className={styles["user-img"]} src={userIcon} alt="userIcon" />
      ) : (
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
      )}
    </header>
  );
}

export default Header;
