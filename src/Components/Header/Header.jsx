
import styles from "./Header.module.css"
import SidebarMenu from "./SidebarMenu"



const Header = () => {
  return (
    <header className="d-flex align-items-center">
        <div className={styles.logo}>
          <img className={styles.img } src="./images/shared/logo.svg" alt="Logo" />
        </div>
        {/* <nav>
          <ul>
            <li><Link to="/" className={styles.format}>00 HOME</Link></li>
            <li><Link to="/destination" className={styles.format}>01 DESTINATION</Link></li>
            <li><Link to="/crew" className={styles.format}>02 CREW</Link></li>
            <li className={styles.format}>03 TECHNOLOGY</li>
          </ul>
        </nav> */}
        <SidebarMenu />
      </header>
  )
}

export default Header