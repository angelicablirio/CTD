import { useState } from 'react'
import { DecimaQuintaAulaItem } from '../../components/DecimaQuintaAulaItem'
import styles from './styles.module.scss'

export function DecimaQuintaAula() {

    const [locations, setLocations] = useState([])
    const [cep, setCep] = useState('')


    function searchCep(cepRecieved) {

      setCep(cepRecieved)

      if(cepRecieved.length === 8){

        fetch(`https://viacep.com.br/ws/${cepRecieved}/json/`).then(
          response => {
            response.json().then(
              address => {
                console.log(address)

                if(address.erro !== undefined){
                  console.log('Deu Erro')
                } else{
                  setLocations([...locations, address])
                }
              }
            )
          }
        )

      }

    }


    function deleteLocation(currentLocation){
      setLocations(
        locations.filter(item => item.cep !== currentLocation.cep)
    )
    }

    return(

        <div className={styles.container}>

            <form>

                <h1>Cadastrar endereços</h1>

                <div>
                  <label htmlFor="">Cep</label>
                  <input
                      type="number"
                      value={cep}
                      onChange={event => searchCep(event.target.value)}
                  />
                </div>

                <button>Cadastrar</button>

            </form>
            <section className={styles.locations}>
              {
                locations.map(
                  (location, index) => 
                    (
                      <DecimaQuintaAulaItem
                          key={index}
                          data={location}
                          onDeleteLocation={currentLocation => deleteLocation(currentLocation)}
                      />
                    )
                      
                )
              }
            </section>
        </div>

    )

}