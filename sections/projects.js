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
      <div className={styles.wrapper}>

        <div className='u-text-center'>
          <h2 className={`${styles.title}`}>Projetos em Curso</h2>
          <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget lectus luctus, venenatis nisl eu, dignissim ex</p>
        </div>

        <div className={`${styles.wrapper}`}>
          <div className={`${styles.cards}`}>
            {
              results.map((r) => (
                <div className={`${styles.card}`}>
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