import styles from '../styles/projects.module.scss'
import React, { useEffect, useState } from 'react'
import projects from '../data/projects'

export default () => {
  /* **********
  Por hora foram retiradas as vagas do Atados, em breve adicionaremos
  estas vagas também
  ************ */

  // const [results, setResults] = useState([])

  // useEffect(() => {
  //   (async function () {
  //     const response = await fetch('https://v2.api.atados.com.br/search/projects/')
  //     const json = await response.json()
  //     setResults(json.results)
  //   })()
  // }, [])

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.wrapper}>

        <div className='u-text-center'>
          <h2 className={`${styles.title}`}>Projetos em Curso</h2>
          <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget lectus luctus, venenatis nisl eu, dignissim ex</p>
        </div>

        <div className={`${styles.wrapper}`}>
          <div className={`${styles.cards}`}>
            {
              projects.map((r) => (
                <div className={`${styles.card}`}>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.description}</p>
                    <p><a target='_blank' href="">Já tenho um projeto</a></p>
                    <p><a target='_blank' href="">Gostaria de ajudar um projeto</a></p>
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