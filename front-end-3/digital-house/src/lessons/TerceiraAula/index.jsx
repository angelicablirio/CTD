import styles from './styles.module.scss';
import components from './components'
        
export function TerceiraAula() {

  return (
    <div className={styles.container}>
      <h1>Lista de componentes encontrados no site <a href={"https://www.starplus.com/en-br"} target={"_blank"}>Star+</a></h1>
      <ul className={styles.lista}>
        {components.map((component) =>{
          return(
            <li key={component.id}>
              <h2>{component.name}</h2>
              <p>{component.description}</p>
              <img src={component.image}/>
            </li>
          )
        })}

      </ul>
    </div>
  );
};
