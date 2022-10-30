import styles from './styles.module.scss'
import {newGames, halloweenGames, earlyAccessGames, cheapGames } from '../../components/DHGames/ListGames/games.js'
import { BannerHome, NavBar} from '../../components/DHGames'
import { HorizontalCard } from '../../components/DHGames/HorizontalCard'
import { VerticalCard } from '../../components/DHGames/VerticalCards'


export function DHGames(){
  return(
    <div className={styles.container}>
        <NavBar />
        <BannerHome />
        <div className={styles.containerCards}>
          <h1 className={styles.title}>New Games</h1>
          <ul className={styles.horizontalList}>
            {newGames.map((card, index)=>{
              return <HorizontalCard key={index} item={card} />
            })}
          </ul>
          <h1 className={styles.title}>Halloween Offers</h1>
          <ul className={styles.verticalList}>
            {halloweenGames.map((card, index)=>{
              return <VerticalCard key={index} item={card} />
            })}
          </ul>
          <h1 className={styles.title}>Early Access Games</h1>
          <ul className={styles.horizontalList}>
            {earlyAccessGames.map((card, index)=>{
              return <HorizontalCard key={index} item={card} />
            })}
          </ul>
          <h1 className={styles.title}>Cheap Games</h1>
          <ul className={styles.verticalList}>
            {cheapGames.map((card, index)=>{
              return <VerticalCard key={index} item={card} />
            })}
          </ul>
        </div>
    </div>
  )
}