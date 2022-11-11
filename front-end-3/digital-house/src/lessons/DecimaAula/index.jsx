import { useState } from 'react';
import { useEffect } from 'react';
import styles from './styles.module.scss';
        
export function DecimaAula() {

  const [pedido, setPedido] = useState('')

  useEffect( () =>{
    setTimeout(() => {

      setPedido('Pizza')

      console.log('O componente foi atualizado!')   

    }, 2000)


  },[] )

  const cancelarPedido = (event) =>{
    event.preventDefault()
    alert('Pedido foi cancelado!')
    setPedido('')
  }


  return (
    <div className={styles.container}>
      <h1>Seu pedido: {pedido}</h1>
      <button onClick={(event) => cancelarPedido(event)}>Cancelar pedido</button>
    </div>
  )
}