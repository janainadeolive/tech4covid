import styles from '../styles/ongoing.module.scss'

export default () => {
  
  return (
    <section className={styles.ongoing}>
      <div className={styles.wrapper}>
        <div className='row center-xs'>

          <div className='col-xs-12 col-sm-8'>
            <h2>Projetos em Curso</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget lectus luctus, venenatis nisl eus venenatis Ut id tincidunt erat. Donec eu orci ac ex imperdiet ornare. Maecenas nec varius purus. Morbi ac urna tellus.</p>
          </div>

        </div>
      </div>
      <div className={styles.mask}></div>
    </section>
  )
}