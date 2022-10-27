import { QuintaAulaItem } from '../../components/QuintaAulaItem'
import components from '../../components/ListComponents/components';
import styles from './style.module.scss'

export function QuintaAula(){
  return(
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de componentes encontrados no site <a href={"https://www.starplus.com/en-br"} target={"_blank"}>Star+</a></h1>
      <ul className={styles.componentsFinded}>
        {components.map((component) =>{
          return(
            <QuintaAulaItem key={component.id} item={component} />
          )
        })}
      </ul>
    </div>
  )
}