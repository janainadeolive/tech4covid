import styles from '../styles/header.module.scss'
import Button from '../components/button'

export default () => {
    return (
        <section className={styles.header}>
            <div className={styles.wrapper}>
                <div className='row between-md middle-xs'>

                    <div className='col-xs-12 col-sm-6'>
                        <a className={styles.logo} href='/'>
                            <img src="/tech4covidbr.png" alt="Logo" />
                        </a>
                    </div>

                    <div className={`col-xs-12 col-sm-6 ${styles.right}`}>
                        <Button modifiers='' name='Junte-se a nós' href='/#projects' />
                    </div>

                </div>
            </div>
        </section>
    )
}
