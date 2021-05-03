import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/PlanIgualdad.module.css'

import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PlanIgualdad = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headerIntro}>
                    <h1>
                        Desde Polaris ofrecemos un <span className={styles.spanCyan}>servicio integral</span> y garantizamos la <span className={styles.spanCyan}>rapidez de respuesta</span> para <span className={styles.spanCyan}>implementar
                        tu Plan de Igualdad</span> en la mayor brevedad posible. Nosotros nos encargamos de todo.
                    </h1>
                </div>
            </div>

            <div className={styles.fullWidth}>
                <h2 className={styles.h2}>Realiza un plan de igualdad para tu empresa para</h2>
                <div className={styles.igualdadGrid}>
                        <div className={`${styles.check} ${styles.firstCheck}`}>
                            < FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className={styles.first}>
                            <p>Cumplir con la legislación y evitar sanciones</p>
                        </div>
                        <div className={`${styles.check} ${styles.secondCheck}`}>
                            < FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className={styles.second}>
                            <p>Tener prioridad en licitaciones y subvenciones</p>
                        </div>
                        <div className={`${styles.check} ${styles.thirdCheck}`}>
                            < FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className={styles.third}>
                            <p>Obtener un mejor posicionamiento de tu empresa</p>
                        </div>
                        <div className={`${styles.check} ${styles.fourthCheck}`}>
                            < FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className={styles.fourth}>
                            <p>Mejorar el entorno laboral</p>
                        </div>
                        <div className={`${styles.check} ${styles.fifthCheck}`}>
                            < FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className={styles.fifth}>
                            <p>Prevenir conductas discriminatorias</p>
                        </div>
                        <div className={`${styles.check} ${styles.sixthCheck}`}>
                            < FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className={styles.sixth}>
                            <p>Cumplir con los objetivos de desarrollo sostenible</p>
                        </div>
                </div>
            </div>
                <div className={styles.container}>

                    <div className={styles.packsIgualdadWrapper}>
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h2>Empresas con menos de <br /> 50 trabajadores</h2>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardIntro}>
                                    <div className={styles.text}>
                                        <p>< FontAwesomeIcon icon={faCheck} />Recopilación de datos</p>
                                        <p>< FontAwesomeIcon icon={faCheck} />Diagnóstico</p>
                                        <p>< FontAwesomeIcon icon={faCheck} />Diseño del Plan de Igualdad</p>
                                        <p>< FontAwesomeIcon icon={faCheck} />Entrega de la documentación a la empresa</p>
                                        <p>< FontAwesomeIcon icon={faCheck} />Píldora formativa</p>
                                        <p>< FontAwesomeIcon icon={faCheck} />Incluye registro retributivo</p>
                                    </div>
                                </div>
                                <p className={styles.linkPack}><Link href='/dejanos-guiarte'><a>Solicitar</a></Link></p>
                            </div>
                            <div className={styles.styleBar}></div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h2>Empresas con más de <br /> 50 trabajadores</h2>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardIntro}>
                                    <div className={styles.text}>
                                        <p>< FontAwesomeIcon icon={faCheck} />Recopilación de datos</p>
                                        <p>< FontAwesomeIcon icon={faCheck} />Creación del grupo de trabajo</p>
                                        <p>< FontAwesomeIcon icon={faCheck} />Diagnóstico</p>
                                        <p>< FontAwesomeIcon icon={faCheck} />Diseño del Plan de Igualdad</p>
                                        <p>< FontAwesomeIcon icon={faCheck} />Registro del Plan de Igualdad</p>
                                        <p>< FontAwesomeIcon icon={faCheck} />Seguimiento y evaluación</p>
                                        <p>< FontAwesomeIcon icon={faCheck} />Entrega de la documentación a la empresa</p>
                                        <p>< FontAwesomeIcon icon={faCheck} />Píldora formativa</p>
                                        <p>< FontAwesomeIcon icon={faCheck} />Incluye registro retributivo</p>
                                    </div>
                                </div>
                                <p className={styles.linkPack}><Link href='/dejanos-guiarte'><a>Solicitar</a></Link></p>
                            </div>
                            <div className={styles.styleBar}></div>
                        </div>
                    </div>



                </div>

        </>
    );
}
 
export default PlanIgualdad;