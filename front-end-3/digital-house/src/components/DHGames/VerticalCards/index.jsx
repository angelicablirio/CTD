import styles from './styles.module.scss'


export function VerticalCard(props){

  return(
        <li className={styles.containerCard}>
          <div className={styles.containerContent}>
            <img className={styles.imgCard} src={props.item.picture} alt="Imagem do Jogo" />
            <div className={styles.containertext}>
              <div className={styles.text}>
                <h2>{props.item.name}</h2>
                <p>{props.item.categories.join(', ')}</p>
              </div>
              <div className={styles.prices}>
                <p className={styles.oldPrice}>{props.item.oldPrice}</p>
                <span className={styles.newPrice}><b>{props.item.newPrice}</b>,00</span>
              </div>
            </div>
          </div>
        </li>
  )
}