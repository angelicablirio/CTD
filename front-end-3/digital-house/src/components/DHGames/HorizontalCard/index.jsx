import styles from './styles.module.scss'
import windows from '../../../assets/imagesDHGames/windows.png'
import apple from '../../../assets/imagesDHGames/apple.png'


export function HorizontalCard(props){
  return(
        <li className={styles.containerCard}>
          <div className={styles.containerContent}>
            <img className={styles.imgCard} src={props.item.picture} alt="Imagem do Jogo" />
            <div className={styles.containertext}>
              <h2>{props.item.name}</h2>
              <div className={styles.containerPlataforms}>
              {props.item.plataforms.map((platform) =>{
                if(platform === 'apple'){
                  return (
                    <img className={styles.imgPlataforms} src={ apple }/>
                  )
                }else{
                  return(
                    <img className={styles.imgPlataforms} src={ windows}/>
                  )
                }
              })}
              </div>
              <p>{props.item.categories.join(', ')}</p>
            </div>
          </div>
          <p className={styles.price}>{props.item.price}</p>
        </li>
  )
}