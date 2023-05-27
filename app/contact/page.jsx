import styles from './page.module.css'
import Link from 'next/link'

import {FaGithub} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'

export default function Contacts() {
    return (
        <main>
            <div className={styles.cont}>
                <h1 className={styles.head}>Contacts:</h1>
            <p><FaEnvelope/> Email: <Link href="mailto:kirihac@gmail.com" className={styles.link}>kirihac@gmail.com</Link></p>  
            <p><FaGithub/> GitHub: <Link href="https://github.com/kirihac" className={styles.link}>https://github.com/kirihac</Link></p> 
            <p><FaTelegramPlane/> Telegram: <Link href="https://t.me/Perefyrgon" className={styles.link}>https://t.me/Perefyrgon</Link></p>  
            <p><FaDiscord/> Discord: <Link href="https://discord.com/users/676119681609760769" className={styles.link}>Veradun#2123</Link></p>  
             </div>
        </main>
    )
}
