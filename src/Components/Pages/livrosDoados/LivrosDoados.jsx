import s from "./livrosDoados.module.scss"
import axios from "axios"
import { useState, useEffect } from "react"


export default function LivrosDoados(){

    const [livro,setLivro] = useState([])

    const pegarDados = async() =>{
        const response = await axios.get("https://api-livros-vnw-lu5v.onrender.com/livros")
            setLivro (response.data)
        }
        useEffect(()=>{
            pegarDados()
        },[])
    return(
        <main className={s.main}>
            <h2>Livros Doados</h2>
            <section className={s.container}>
                {livro.map((item)=>(
                <article key={item.id}>
                    <img src={item.imagem_url} alt={`capa do livro `+ item.titulo}/>
                    <h3>{item.titulo}</h3>
                    <p>{item.autor}</p>
                    <p>{item.categoria}</p>
                </article> 
                ))}
                
            </section>
        </main>
    )
}