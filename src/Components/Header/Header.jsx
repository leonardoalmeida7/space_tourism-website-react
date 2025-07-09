import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import SidebarMenu from "./SidebarMenu"



const Header = () => {
  return (
    <header>
        <SidebarMenu />
        <div className="logo">
          <img className={styles.img } src="./images/shared/logo.svg" alt="Logo" />
        </div>
        <nav>
          <ul className="">
            <li><Link to="/" className={styles.format}>00 HOME</Link></li>
            <li><Link to="/destination" className={styles.format}>01 DESTINATION</Link></li>
            <li><Link to="/crew" className={styles.format}>02 CREW</Link></li>
            <li className={styles.format}>03 TECHNOLOGY</li>
          </ul>
        </nav>
      </header>
  )
}

export default Header