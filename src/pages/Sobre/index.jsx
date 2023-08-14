import styles from './Sobre.module.css'
import avatar from './images/avatar.png'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import python from './images/icon-python.svg'
import django from './images/icon-django.svg'
import fastapi from './images/icon-fastapi.svg'
import javascript from './images/icon-javascript.svg'
import typescript from './images/icon-typescript.svg'
import react from './images/icon-react.svg'
import node from './images/icon-nodejs.svg'
import java from './images/icon-java.svg'
import kotlin from './images/icon-kotlin.svg'
import  csharp from './images/icon-csharp.svg'
import delphi from './images/icon-delphi.svg'
import postgreesql from './images/icon-postgreesql.svg'
import mysql from './images/icon-mysql.svg'
import mongodb from './images/icon-mongodb.svg'
import git from './images/icon-git.svg'

function Sobre() {
    return (
      <>
        <section className={styles.sobre}>
          <div className={styles.bio}>
            <img src={avatar} alt="Avatar" className={styles.avatar} />
            <div className={styles.textos}>
              <h2>Sobre</h2>
              <p>Sou <span>Gabriel da Silva</span> <br/> 
                    <strong>Estudante de Analise de Desenvolvimento de Sistemas.</strong> </p>

              <p>Atuo na área de Tecnologia desde 2022.
                <br/> Atuando principalmente como <strong>Suporte Técnico N1 e N2.</strong><br/>
                Desenvolvendo projetos pessoais dentro da área de <strong>desenvolvimento.</strong>
              </p>
              <p>Desde então, estou envolvido com entusiasmo no desenvolvimento e em experiências de suporte técnico, formando um alicerce sólido para minha trajetória. </p>
              

            </div>
          </div>
          <div className={styles.techs}>
             <h3> Techs </h3>
          <div className={styles.icones}> 
            <img src={html} alt="icone do html"/>
            <img src={css} alt="icone do css"/>
            <img src={javascript} alt="icone do javascript"/>            
            <img src={typescript} alt="icone do typescript"/>
            <img src={react} alt="icone do react"/>
            <img src={node} alt="icone do node"/> 
            <img src={python} alt="icone do python"/> 
            <img src={django} alt="icone do django"/>
            <img src={fastapi} alt="icone do fastapi"/>
            <img src={java} alt="icone do java"/>
            <img src={kotlin} alt="icone do kotlin"/> 
            <img src={csharp} alt="icone do csharp"/>
            <img src={delphi} alt="icone do delphi"/>
            <img src={mysql} alt="icone do mysql"/>
            <img src={postgreesql} alt="icone do postgresql"/>
            <img src={mongodb} alt="icone do mongodb"/>
            <img src={git} alt="icone do git"/>
          </div>
          </div>
        </section>
      
      </>
    )
}

export default Sobre 