import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home ( ) { 
    return (
       <section className={styles.home}>
          <div className={styles.apresentacao}>
              <p>
                Olá, sou <br/>
                <span> Gabriel da Silva</span> <br/>
                Desenvolvedor 
              </p>
              <Link to="/sobre" className={`${styles.btn} ${styles.btn_sobre_red}`}>
              Sobre mim
              </Link>
          </div>
              <figure>
                <img className={styles.img_home} src="/img_home.svg" alt="Imagem de Home"/>
              </figure>
          </section>
    )
}

export default Home