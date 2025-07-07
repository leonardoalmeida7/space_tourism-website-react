import { Link } from "react-router-dom"
import styles from "./Header.module.css"

const Header = () => {
  return (
      <header>
        <div className="logo">
          <img src="./images/shared/logo.svg" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/destination" >01 Destination</Link></li>
            <li>02 Crew</li>
            <li>03 Technology</li>
          </ul>
        </nav>
      </header>
  )
}

export default Header