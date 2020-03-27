import styles from '../styles/help-us.module.scss'
import Button from '../components/button'

export default () => {
  
  return (
    <section className={styles.helpus}>
      <div className={styles.wrapper}>
        <div className='row between-md middle-xs'>

          <div className='col-xs-12 col-sm-6'>
            <p>STOP COVID-19 · A PARTIR DE 1€</p>
            <h3>AJUDE-NOS A COMPRAR MATERIAL HOSPITALAR E EQUIPAMENTOS DE PROTEÇÃO</h3>
          </div>

          <div className={`col-xs-12 col-sm-6 ${styles.right}`}>
            <Button modifiers='bg-transparent white-outline' name='Quero fazer uma doação!' href='/' />
          </div>

        </div>
      </div>
      <div className={styles.mask}></div>
    </section>
  )
}