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
    )
}

export default Home