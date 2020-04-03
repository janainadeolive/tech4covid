import styles from '../styles/footer.module.scss'

export default () => {
    return (
        <section className={styles.footer}>
            <div className={styles.wrapper}>
                <div className='col-xs-12 col-sm-6'>
                    © 2020 Tech4Covid19 · A comunidade tecnológica combate a Covid19.
                </div>

                <div className={`col-xs-12 col-sm-6 ${styles.right}`}>
                </div>
            </div>
        </section>
    )
}
