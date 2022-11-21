
import { useState } from 'react';
import { DecimaQuartaAulaItem } from '../../components/DecimaQuartaAulaItem';
import styles from './styles.module.scss';
        
export const DecimaQuartaAula = () => {

  const registers = [
    {title: "primeiro registro"}
]

  const [registerListVisible, setRegisterListVisible] = useState(true)
        
  return (
    <div className={styles.container}>
      <h1>Lista de Registros</h1>
      <button onClick={() => setRegisterListVisible(!registerListVisible )} >{`${registerListVisible ? 'Ocultar' : 'Mostrar'}`}</button>

      {registerListVisible && (
        <ul>
          {registers.map((register, index) =>{
            return(
              <DecimaQuartaAulaItem
                key={index}
                registerData={register}
                deleteRegister={registerReturn => deleteRegisterFormList(registerReturn)}
              />
            )
          })}
        </ul>
      )}
    </div>
  );
};
