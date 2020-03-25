import styles from './projects.module.scss'
import React, { useEffect, useState } from 'react'

export default () => {
  const [results, setResults] = useState([])

  useEffect(() => {
    (async function () {
      console.log('fetching')
      const response = await fetch('https://v2.api.atados.com.br/search/projects/')
      const json = await response.json()
      setResults(json.results)
    })()
  }, [])

  return (
    <section className='projects'>
      <section>
        <div className='container'>

          <div className={`${styles.cards} row`}>
            {
              results.map((r) => (
                <div className={`${styles.card} col-xs-12 col-sm-8 col-md-6 col-lg-4`}>
                  <h1>{r.name}</h1>
                  <p>{r.description}</p>
                  <a href={`https://atados.com.br/vaga/${r.slug}`}>Acessar</a>
                </div>
              ))
            }
          </div>

        </div>
      </section>
    </section>
  )
}