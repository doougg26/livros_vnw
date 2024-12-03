import s from "./footer.module.scss"

import FaceIcon from "../../assets/img/facebook-app-round-white-icon 2.png"
import TwitterIcon from "../../assets/img/Twitter_Logo_WhiteOnImage 2.png"
import YtIcon from '../../assets/img/youtube-app-white-icon 2.png'
import LdIcon from '../../assets/img/linkedin-icon-2048x2048-yx2cmt11 2.png'
import InstaIcon from '../../assets/img/instagram-white-icon 2.png'

export default function Footer(){
    return(
        <footer className={s.footer}>
            <section className={s.contacts}>
                <p>4002-8922</p>
                <ul>
                    <li>
                        <a href='https://www.facebook.com/'><img src={FaceIcon} alt="facebook" /></a>
                    </li>
                    <li>
                    <a href='https://x.com/'><img src={TwitterIcon} alt="twitter" /></a> 
                    </li>
                    <li>
                    <a href='https://www.youtube.com/'><img src={YtIcon} alt="youtube" /></a> 
                    </li>
                    <li>
                    <a href='https://www.linkedin.com/'><img src={LdIcon} alt="LinkedIn" /></a> 
                    </li>
                    <li>
                    <a href='https://www.instagram.com/'><img src={InstaIcon} alt="instagram" /></a> 
                    </li>
                </ul>
            </section>
            <section className={s.credits}>
            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}