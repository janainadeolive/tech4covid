import styles from '../styles/manifesto.module.scss'

export default () => {
    return (
        <section className={styles.manifesto} id="manifest">
            <div className={styles.wrapper}>
              <div className='u-text-left'>
                <h2 className={`${styles.title}`}>Manifesto Tech 4 CONVID 19 BR</h2>
                <p className={styles.subtitle}>
                  Nunca o mundo se sentiu tão vulnerável e incerto.  A única certeza que temos é que a ajuda é sempre necessária.  Desta forma, inspirados pelos nossos irmãos portugueses, que iniciaram o movimento #tech4COVID19, nasce o #tech4COVID19BR! Uma comunidade dedicada a trazer soluções para os diversos desafios que Brasil está enfrentando com a pandemia do Covid-19.
                </p>
                <br />
                <p className={styles.subtitle}>
                  Somos um grupo aberto formado por pessoas de diferentes áreas de conhecimento e atuação, trabalhando para somar forças e esforços, mesmo que à distância, a todos aqueles que se encontram na linha de frente do combate ao novo coronavírus: de profissionais da área da saúde, à garis e entregadores. 
                </p>
              </div>
            </div>
        </section>
    )
}
