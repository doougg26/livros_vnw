import S from './header.module.scss'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from '../Pages/Home/Home'
import LivrosDoados from '../Pages/livrosDoados/LivrosDoados'
import QueroDoar from '../Pages/queroDoar/QueroDoar'

import headerIcon from "../../assets/img/headerBooks.png"
import iconSearch from "../../assets/img/search.png"


export default function Header(){
    return(
        
<BrowserRouter>
        <header>
            <section className={S.boxLogo}>
                <img src={headerIcon} alt="imagem de um livro" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={S.boxMenu}>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/doados">Livros Doados</Link></li>
                    <li><Link to="/queroDoar">Quero Doar</Link></li>
                </ul>
            </nav>
            <div className={S.boxInput}>
                <input type="text" placeholder='O que você procura?' />
                <img src={iconSearch} alt="" />
            </div>
        </header>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/doados' element={<LivrosDoados/>}/>
            <Route path='/queroDoar' element={<QueroDoar/>}/>
        </Routes>
        </BrowserRouter>
        
    )
}