import styles from '../styles/hero.module.scss'
import Button from '../components/button'

export default () => {

    return (
        <section className={styles.hero}>
            <div className={styles.wrapper}>
                <div className='row between-md middle-xs'>

                    <div className='col-xs-12 col-md-6'>
                        <h1>A comunidade tecnológica combate a Covid-19.</h1>
                        <p>Ut id tincidunt erat. Donec eu orci ac ex imperdiet ornare. Maecenas nec varius purus. Morbi ac urna tellus. Vestibulum ante ipsum primis in faucibus.</p>

                        <ul>
                            <li><Button name='Junte-se a nós' href='/'/></li>
                            <li><Button name='Manifesto' href='/'/></li>
                            <li><Button name='Projetos' href='/'/></li>
                        </ul>
                    </div>

                    <div className={`col-xs-12 col-md-6 u-text-center`}>
                        <img src="https://ucarecdn.com/09c7fb1b-fb16-4b4a-9a2c-33399303f743/image.png" />
                    </div>

                </div>
            </div>
        </section>
    )
}
