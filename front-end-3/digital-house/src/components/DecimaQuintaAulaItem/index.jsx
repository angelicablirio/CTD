import styles from './styles.module.scss'

export function DecimaQuintaAulaItem(props) {

    return(
        <div className={styles.container}>
            <h1>Endereço</h1>
            <address>{props.data.logradouro}, {props.data.bairro} - {props.data.localidade}({props.data.uf})</address>
            <small>{props.data.cep}</small>
            <button onClick={() => props.onDeleteLocation(props.data)}>Deletar</button>
        </div>
    )

}