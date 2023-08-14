
import styles from './Contatos.module.css'
import {SiGmail, SiWhatsapp, SiGithub } from 'react-icons/si'
import {IoLogoLinkedin } from 'react-icons/io'

function Contatos() {
    return (
       <>
       
         <section className={styles.contatos}>
         <h2>Contatos</h2>
         <h3>Entre em contato</h3>
         <p>Para que possamos conversar mais sobre.</p>
         <div className={styles.icones}>

         <a href='mailto:gabriel710silva@gmail.com' target='_blank' rel='noopener noreferrer'>
         <SiGmail className={styles.icone}/> 
         </a>
         <SiWhatsapp className={styles.icone}/>
         <SiGithub className={styles.icone}/>
         <IoLogoLinkedin className={styles.icone}/>

         </div>
          </section>
        
       </>
    )
}

export default Contatos