import '../styles/global.css';
import styles from '../styles/Navbar.module.css';

import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <>
      <nav>

        <div className={styles.logo}>
          <img src={Logo} />
        </div>

        <div className={styles.divider}></div>

        <div className={styles.NavBar}>
          <ul className={styles.NavList}>
            <li className={styles.NavItem}>Home</li>
            <li className={styles.NavItem}>New</li>
            <li className={styles.NavItem}>Popular</li>
            <li className={styles.NavItem}>Trending</li>
            <li className={styles.NavItem}>Categories</li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Navbar;