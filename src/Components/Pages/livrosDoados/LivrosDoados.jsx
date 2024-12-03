import s from "./livrosDoados.module.scss"
import Livro from "../../../assets/img/livroimg.png"


export default function LivrosDoados(){
    return(
        <main className={s.main}>
            <h2>Livros Doados</h2>
            <section className={s.container}>
                <article>
                    <img src={Livro} alt="imagem" />
                    <h3>Titulo</h3>
                    <p>autor</p>
                    <p>genero</p>
                </article>
                <article>
                    <img src={Livro} alt="imagem" />
                    <h3>Titulo</h3>
                    <p>autor</p>
                    <p>genero</p>
                </article>
                <article>
                    <img src={Livro} alt="imagem" />
                    <h3>Titulo</h3>
                    <p>autor</p>
                    <p>genero</p>
                </article>
            </section>
        </main>
    )
}