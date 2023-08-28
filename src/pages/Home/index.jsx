<<<<<<< HEAD
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
=======
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Home ( ) { 
    return (
        <>
        <Header/>
        <section className='container'>
           <div className='apresentacao'>
                <p>
                 Olá, sou <br/>
                 <span> Gabriel da Silva</span> <br/>
                  Desenvolvedor 
                </p>
               <button className='btn btn_sobre_red'>
               Sobre mim
               </button>
           </div>
             <figure>
               <img className='img-home' src="/img_home.svg" alt="Imagem de Home"/>
             </figure>
           </section>
         
        <Footer/>
        </>
>>>>>>> ecaa45fb1f08e40af10df382cf5e01dba916de95
    )
}

export default Home