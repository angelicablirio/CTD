import styles from './style.module.scss';
import components from './components';
        
export function QuartaAula() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de componentes encontrados no site <a href={"https://www.starplus.com/en-br"} target={"_blank"}>Star+</a></h1>
      <ul className={styles.componentsFinded}>
        {components.map((component) =>{
          return(
            <li key={component.id}>
              <img src={component.image}/>
              <h2>{component.name}</h2>
              <p>{component.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}