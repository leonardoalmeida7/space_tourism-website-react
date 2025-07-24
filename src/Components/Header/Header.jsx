
import styles from "./Header.module.css"
import SidebarMenu from "./SidebarMenu"



const Header = ({ actualLink, setActualLink }) => {
  return (
    <header className="d-flex align-items-center align-items-md-start">
        <div className={styles.logo + ' mt-md-3 ms-md-4'}>
          <img className={styles.img } src="./images/shared/logo.svg" alt="Logo" />
        </div>
        <SidebarMenu actualLink={actualLink} setActualLink={setActualLink} />
      </header>
  )
}

export default Header