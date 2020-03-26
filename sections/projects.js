import styles from '../styles/projects.module.scss'
import React, { useEffect, useState } from 'react'

export default () => {
  const [results, setResults] = useState([])

  useEffect(() => {
    (async function () {
      const response = await fetch('https://v2.api.atados.com.br/search/projects/')
      const json = await response.json()
      setResults(json.results)
    })()
  }, [])

  return (
    <section className={styles.projects}>
      <div className={styles.projects__wrapper}>

        <div className='u-text-center'>
          <h2 className={styles.projects__title}>Projetos em Curso</h2>
          <p className={styles.projects__subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget lectus luctus, venenatis nisl eu, dignissim ex proin vitae velit in ligula iaculis</p>
        </div>

        <div className={'container-fluid'}>
          <div className={`${styles.projects__cards} row center-xs middle-xs between-lg`}>
            {
              results.map((r) => (
                <div className={`${styles.projects__card} col-xs-12 col-sm-8 col-md-6 col-lg-4`}>
                  <div>
                    <h3>{r.name}</h3>
                    <p>{r.description}</p>
                    <a target='_blank' href={`https://atados.com.br/vaga/${r.slug}`}>Acessar</a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </section>
  )
}