import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Buy Homes</h1>
      <ul className={styles.NavList}>
        <a className={styles.NavLink} href="/">
          <li className={styles.NavItem}>Home</li>
        </a>
        <a className={styles.NavLink} href="/AddHome">
          <li className={styles.NavItem}>Add House</li>
        </a>
        <a className={styles.NavLink} href="/Market">
          <li className={styles.NavItem}>Market</li>
        </a>
      </ul>
    </header>
  );
};

export default Header;
