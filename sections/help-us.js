import styles from '../styles/help-us.module.scss'

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
            <a className='btn' href='#'>Quero fazer uma doação!</a>
          </div>

        </div>
      </div>
      <div className={styles.mask}></div>
    </section>
  )
}