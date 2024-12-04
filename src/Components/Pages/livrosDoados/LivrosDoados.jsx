import s from "./livrosDoados.module.scss"
import Livro from "../../../assets/img/livroimg.png"
import Livro2 from "../../../assets/img/livro2.jpg"
import Livro3 from "../../../assets/img/livro3.webp"


export default function LivrosDoados(){
    return(
        <main className={s.main}>
            <h2>Livros Doados</h2>
            <section className={s.container}>
                <article>
                    <img src={Livro} alt="capa do livro o protagonista" />
                    <h3>O Protagonista</h3>
                    <p>Suzane Andrade</p>
                    <p>Ficção</p>
                </article>
                <article>
                    <img src={Livro2} alt="capa do livro monaliza overdrive" />
                    <h3>Monalisa Overdrive</h3>
                    <p>William Gibson</p>
                    <p>Ficção</p>
                </article>
                <article>
                    <img src={Livro3} alt="capa do livro countdown zero" />
                    <h3>Countdown Zero</h3>
                    <p>William Gibson</p>
                    <p>Ficção</p>
                </article>
            </section>
        </main>
    )
}