import styles from '../styles/Equipo.module.css'

import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Equipo = () => {
    return (
        <>
            <div className={styles.fullWidth}>
                <div className={styles.wrapper}>
                    <h2 className={styles.h2}>Nuestro equipo</h2>
                    <div className={styles.equipoGrid}>
                        <div className={styles.consultores}>
                            <p>< FontAwesomeIcon icon={faCheck} />Consultores</p>
                        </div>
                        <div className={styles.tecnicos}>
                            <p>< FontAwesomeIcon icon={faCheck} />Técnicos</p>
                        </div>
                        <div className={styles.auditores}>
                            <p>< FontAwesomeIcon icon={faCheck} />Auditores</p>
                        </div>
                        <div className={styles.abogados}>
                            <p>< FontAwesomeIcon icon={faCheck} />Abogados</p>
                        </div>
                        <div className={styles.expertos}>
                            <p>< FontAwesomeIcon icon={faCheck} />Expertos en TIC y Ciberseguridad</p>
                        </div>
                        <div className={styles.formadores}>
                            <p>< FontAwesomeIcon icon={faCheck} />Formadores acreditados</p>
                        </div>
                        <div className={styles.gestores}>
                            <p>< FontAwesomeIcon icon={faCheck} />Gestores administrativos</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Equipo;