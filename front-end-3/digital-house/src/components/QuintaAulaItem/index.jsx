import styles from './style.module.scss'

export function QuintaAulaItem(props){
  return(
    <li className={styles.card}>
        <img src={props.item.image}/>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
    </li>
  )
}