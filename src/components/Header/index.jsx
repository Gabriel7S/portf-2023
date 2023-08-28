
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { useState } from 'react'


function Header() {
  const [ showMenu, setShowMenu ] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }    

    return (
        <header className={styles.header}>
            <Link to="/">
            <span> Gabriel da Silva </span>
            </Link>
            <nav className={`${styles.menuSandwich} ${ showMenu ? styles.show : '' }`}
        onClick={toggleMenu}>
                <Link to="/"> Home </Link> 
                <Link to="/sobre"> Sobre </Link> 
                <Link to="/projetos"> Projetos </Link> 
                <Link to="/contatos"> Contatos </Link> 
            </nav>
            <div
        className={styles.menuButton}
        onClick={toggleMenu}
      >
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
      </div>
=======
import styles from './Header.module.css'


function Header() {
    return (
        <header className={styles.header}>
            <span> Gabriel da Silva </span>
            <nav>
                <a href=""> Home </a>
                <a href=""> Sobre </a>
                <a href=""> Projetos </a>
                <a href=""> Contatos </a>
            </nav>
>>>>>>> ecaa45fb1f08e40af10df382cf5e01dba916de95
        </header>
    )
}

export default Header