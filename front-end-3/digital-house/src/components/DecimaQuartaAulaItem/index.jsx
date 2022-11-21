import { useEffect } from 'react';
import styles from './styles.module.scss';
        
export const DecimaQuartaAulaItem = (props) => {

  const deletarRegistro = () =>{

    props.deleteregister(props.registerData)

  }

  useEffect(() => {}, [])
        
  return (
    <li className={styles.container}>
      <p>{props.registerData.title}</p>
      <button onClick={() => deletarRegistro()}>Deletar</button>
    </li>
  );
};
