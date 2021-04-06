import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Navigation from './Navigation.js'
import Footer from './Footer.js'
import Meta from './Meta'
import ContactBanner from './ContactBanner'

const Layout = ({children}) => {
    return (
        <>
            <Meta />
            < Navigation />
            < ContactBanner />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
            < Footer />
        </>
    );
}
 
export default Layout;