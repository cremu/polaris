import styles from '../styles/Consultoria.module.css'

const Consultoria = () => {
    return (  
            <div className={styles.wrapper}>
                <div className={styles.itemHeader}>
                    <h1>Polaris ofrece un servicio 360º, integral, especializado y 100% personalizado que ofrece una doble seguridad</h1>
                </div>
                <div className={styles.itemText}>
                    <p>El cliente sabe en todo momento como avanza su adaptación y cuales son los pasos a seguir.</p>
                    <p>Y tiene la seguridad de una <span className={styles.spanCyan}>adaptación completa</span> porque incluye también el cumplimineto responsable de los trabajadores, a través de la <span className={styles.spanCyan}>formación.</span></p>
                </div>
            </div>

    );
}
 
export default Consultoria;