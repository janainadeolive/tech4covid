import styles from '../styles/header.module.scss'
import Button from '../components/button'

export default () => {

    return (
        <section className={styles.header}>
            <div className={styles.wrapper}>
                <div className='row between-md middle-xs'>

                    <div className='col-xs-12 col-sm-6'>
                        <a className={styles.logo} href='/'>
                            <img src="https://ucarecdn.com/e2cfb782-1524-496a-a48f-f97b75440d56/" alt="Logo" />
                        </a>
                    </div>

                    <div className={`col-xs-12 col-sm-6 ${styles.right}`}>
                        <Button modifiers='' name='Junte-se a nós' href='/' />
                    </div>

                </div>
            </div>
        </section>
    )
}
