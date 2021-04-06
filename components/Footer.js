import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerGrid}>
                    <div className={styles.polaris}>
                        <Image src='/illustrations/polaris-cyan.png' alt='Logo polaris' width={135} height={46.55} />
                        <p>C/ Conde Güell, 54 4º 1º</p>
                        <p>08028 Barcelona</p>
                    </div>
                    <div className={styles.links}>
                        <ul>
                            <li><Link href='/consultoria'><a>Consultoría</a></Link></li>
                            <li><Link href='/conocenos'><a>Conócenos</a></Link></li>
                            <li><Link href='/blog'><a>Blog</a></Link></li>
                        </ul>
                    </div>
                    <div className={styles.legal}>
                        <ul>
                            <li><Link href='/'><a>Aviso Legal</a></Link></li>
                            <li><Link href='/'><a>Política de privacidad</a></Link></li>
                            <li><Link href='/'><a>Política de cookies</a></Link></li>
                        </ul>
                    </div>
                    <div className={styles.contacto}>
                        <p><a href="mailto:test@test.com">polarisdata@polarisdata.es</a></p>
                        <p><a href="tel:+34690093663">690 093 663</a></p>
                        <div className={styles.signature}>
                            <p>Polaris.</p>
                            <p>Derechos reservados.</p>
                        </div>

                    </div>                    
                </div>
            </footer>
        </>
    );
}
 
export default Footer;