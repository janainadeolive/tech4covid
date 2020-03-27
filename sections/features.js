import styles from '../styles/features.module.scss'

export default () => {
  
  return (
    <section className={styles.features}>

      <h2 className={`${styles.features__title} u-text-uppercase margin-auto`}>Procuramos ser mais rápidos do que vírus</h2>
      <p className={styles.features__subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget lectus luctus, venenatis nisl eus venenatis</p>
      <p className={`${styles.features__subtitle_dark}`}>Lorem ipsum dolor sit amet</p>

      <div className={`${styles.features__wrapper} margin-auto`}>
        <div className={'container-fluid'}>
          <div className={`row center-xs middle-xs between-lg`}>

            {/* item */}
            <div className={`${styles.features__item} col-xs-12 col-sm-4`}>
              <img className={`${styles.features__img}`} src='https://tech4covid19.org/static/img/twemoji/1f64c.svg' />
              <span className={`${styles.features__number}`}>3.700</span>
              <span className={`${styles.features__word}`}>Voluntários</span>
            </div>

            {/* item */}
            <div className={`${styles.features__item} col-xs-12 col-sm-4`}>
              <img className={`${styles.features__img}`} src='https://tech4covid19.org/static/img/twemoji/1f44f.svg' />
              <span className={`${styles.features__number}`}>108m €</span>
              <span className={`${styles.features__word}`}>Angariados</span>
            </div>

            {/* item */}
            <div className={`${styles.features__item} col-xs-12 col-sm-4`}>
              <img className={`${styles.features__img}`} src='https://tech4covid19.org/static/img/twemoji/2764.svg' />
              <span className={`${styles.features__number}`}>2100</span>
              <span className={`${styles.features__word}`}>Doadores</span>
            </div>

            {/* item */}
            <div className={`${styles.features__item} col-xs-12 col-sm-4`}>
              <img className={`${styles.features__img}`} src='https://tech4covid19.org/static/img/twemoji/1f4aa.svg' />
              <span className={`${styles.features__number}`}>27</span>
              <span className={`${styles.features__word}`}>Projetos Ativos</span>
            </div>

            {/* item */}
            <div className={`${styles.features__item} col-xs-12 col-sm-4`}>
              <img className={`${styles.features__img}`} src='https://tech4covid19.org/static/img/twemoji/1f3e1.svg' />
              <span className={`${styles.features__number}`}>1200</span>
              <span className={`${styles.features__word}`}>Quartos Disponíveis</span>
            </div>

            {/* item */}
            <div className={`${styles.features__item} col-xs-12 col-sm-4`}>
              <img className={`${styles.features__img}`} src='https://tech4covid19.org/static/img/twemoji/1f469-1f3fb-200d-2695-fe0f.svg' />
              <span className={`${styles.features__number}`}>210</span>
              <span className={`${styles.features__word}`}>Médicos em Video-Consultas</span>
            </div>

          </div>
        </div>
      </div>
      
    </section>
  )
}