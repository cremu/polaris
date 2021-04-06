import Image from 'next/image'

import styles from '../styles/Hero.module.css'

const Hero = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Let us guide you</h1>
                    <h2>Te ayudamos a cumplir con el reglamento de Protección de Datos</h2>
                </div>
                <div className={styles.text}>
                    <p>Polaris aporta soluciones integrales en materia de <span className={styles.spanCyan}>Protección de Datos</span>, con una metodología propia, en el análisis de datos y 
                       en dar soluciones derivadas de la <span className={styles.spanCyan}>experiencia</span> y <span className={styles.spanCyan}>conocimiento.</span>
                    </p>
                    <div className={styles.illustration}>
                        <Image src='/illustrations/conocenos.png' alt='Ilustración conocenos polaris' width={549} height={280} />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Hero;