import styles from './Card.module.css'
import htmlIcon from '../../pages/Sobre/images/icon-html.svg'
import cssIcon from '../../pages/Sobre/images/icon-css.svg'
import pythonIcon from '../../pages/Sobre/images/icon-python.svg'
import djangoIcon from '../../pages/Sobre/images/icon-django.svg'
import fastapiIcon from '../../pages/Sobre/images/icon-fastapi.svg'
import javascriptIcon from '../../pages/Sobre/images/icon-javascript.svg'
import typescriptIcon from '../../pages/Sobre/images/icon-typescript.svg'
import reactIcon from '../../pages/Sobre/images/icon-react.svg'
import nodeIcon from '../../pages/Sobre/images/icon-nodejs.svg'
import javaIcon from '../../pages/Sobre/images/icon-java.svg'
import kotlinIcon from '../../pages/Sobre/images/icon-kotlin.svg'
import  csharpIcon from '../../pages/Sobre/images/icon-csharp.svg'
import delphiIcon from '../../pages/Sobre/images/icon-delphi.svg'
import postgreesqlIcon from '../../pages/Sobre/images/icon-postgreesql.svg'
import mysqlIcon from '../../pages/Sobre/images/icon-mysql.svg'
import mongodbIcon from '../../pages/Sobre/images/icon-mongodb.svg'
import gitIcon from '../../pages/Sobre/images/icon-git.svg'
import { BsArrowRight } from 'react-icons/bs'

const languageIcons = {
    HTML: htmlIcon,
    CSS: cssIcon,
    JavaScript: javascriptIcon,
    TypeScript: typescriptIcon,
    React: reactIcon,
    Node: nodeIcon,
    Python: pythonIcon,
    Django: djangoIcon,
    FastApi: fastapiIcon,
    Java: javaIcon,
    Kotlin: kotlinIcon,
    Csharp: csharpIcon,
    Delphi: delphiIcon,
    PosgreeSQL: postgreesqlIcon,
    MySQL: mysqlIcon,
    MongoDB:mongodbIcon,
    Git: gitIcon,   
  };

// eslint-disable-next-line react/prop-types
function Card({name, description, html_url, language }) {
    const icon = languageIcons[language] || null;
    return(
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            {icon && <img src={icon} alt={`ícone de ${language}`} />}
            <p></p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
            </div>
            </div>
            <a href={html_url} target="_blank" rel="nopenner noreferrer" className={styles.botao}>
            <BsArrowRight/>
            </a>
        </section>
    )
}

export default Card 