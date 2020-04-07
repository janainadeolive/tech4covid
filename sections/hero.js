import styles from '../styles/hero.module.scss'
import Button from '../components/button'

export default () => {

    return (
        <section className={styles.hero}>
            <div className={styles.wrapper}>
                <div className='row between-md middle-xs'>

                    <div className='col-xs-12 col-md-6'>
                        <h1>Uma comunidade para combater a COVID- 19</h1>
                        <p>Inspirados pelo movimento português, criamos uma comunidade de pessoas que utilizam suas habilidades para impedir o avanço do corona vírus no país.</p>

                        <ul>
                            <li><Button modifiers='' name='Junte-se a nós' href='/#projects'/></li>
                            <li><Button modifiers='bg-transparent red-outline' name='Manifesto' href='/#manifest'/></li>
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
