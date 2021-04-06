import Image from 'next/image'
import styles from '../styles/Servicios.module.css'

const Servicios = () => {
    return (
        <div className={styles.fullWidth}>

            <div className={styles.wrapper}>
                <h2 className={styles.h2}>Servicio especializado, personalizado y seguro</h2>
                <div className={styles.container}>
                    <div className={styles.item}>
                        <Image src='/illustrations/servicios-lupa-navy.png' alt='Ilustración lupa polaris' width={130} height={130} />
                        <p>Diagnóstico inicial de la situación de la organización</p>
                    </div>
                    <div className={styles.item}>
                        <Image src='/illustrations/servicios-escudo-navy.png' alt='Ilustración escudo polaris' width={130} height={130} />
                        <p>Verificación de la seguridad del entorno tecnológico y organizativo</p>
                    </div>
                    <div className={styles.item}>
                        <Image src='/illustrations/servicios-plan-navy.png' alt='Ilustración plan polaris' width={130} height={130} />
                        <p>Plan de acción a medida</p>
                    </div>
                    <div className={styles.item}>
                        <Image src='/illustrations/servicios-formacion-navy.png' alt='Ilustración formación polaris' width={130} height={130} />
                        <p>Formación bonificable y especializada</p>
                    </div>

                </div>
            </div>

        </div>
    );
}
 
export default Servicios;