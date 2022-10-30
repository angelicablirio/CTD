import styles from './styles.module.scss'
import imageBanner from '../../../assets/imagesDHGames/bannerHome.png'
import imageBat from '../../../assets/imagesDHGames/bat.png'
import imagePumpkin from '../../../assets/imagesDHGames/pumpkin.png'


export function BannerHome(){
  return(
    <div className={styles.container}>
      <img src={imageBanner} alt="Banner DH Games" className={styles.banner}/>
      <div className={styles.containerCard}>
        <p className={styles.logo}>DH GAMES</p>
        <h1 className={styles.title} >PROMOS OU <span>DESCONTOZURAS?</span></h1>
        <p className={styles.slogan} >O trocadilho é ruim mas as promoções não!</p>
        <p className={styles.offer}>Aproveite as assombrosas ofertas de Halloween.</p>
      </div>
      <img className={styles.pumpkin} src={imagePumpkin} alt="Imagem abóbora" />
      <img className={styles.bat} src={imageBat} alt="Imagem morcego" />
    </div>
  )
}