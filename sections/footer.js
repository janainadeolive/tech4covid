import styles from '../styles/footer.module.scss'

export default () => {
    return (
        <section className={styles.footer}>
            <div className={`${styles.wrapper} container-fluid`}>
                <div class="row">
                    <div className='col-xs-12 col-sm-6'>
                        <p>Realizado por:</p>
                        <a className={`${styles.logo} ${styles.atados}`} href="https://www.atados.com.br/" target="_blank">
                            <img src="/logo-atados.svg" alt="Atados" />
                        </a>
                    </div>
                    <div className='col-xs-12 col-sm-6'>
                        <p>Idealizado por:</p>
                        <a className={styles.logo} href="https://tech4covid19.org/" target="_blank">
                            <img src="/tech4covid19.png" alt="Tech4covid19" target="_blank" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
