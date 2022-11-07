import { useState } from 'react'
import styles from './styles.module.scss'
import { SetimaAulaCardProduto } from "../../components/SetimaAulaCardProduto"

export function OitavaAula(){

    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productPicture, setProductPicture] = useState('')
    const [formularioErro, setFormularioErro] = useState(false)
    const [allProducts, setAllProducts] = useState([
        
        {
            id: 1,
            name: 'Xbox',
            price: '3.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
        },
        {
            id: 2,
            name: 'Playstation 5',
            price: '5.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
        },
        {
            id: 3,
            name: 'Switch',
            price: '2.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
        }
    ])

    

    const newProduct = {
        id: 4,
        name: 'Playstation 4',
        price: '2.000',
        picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
    }

    const addNewProduct = () =>{
        setAllProducts([...allProducts, newProduct])
    }

    const registerProduct = (event) =>{
        event.preventDefault()

        const newProductRegister = {
            name: productName,
            price: productPrice,
            picture: productPicture

        }

        if(productName === '' || productPicture === '' || productPrice === ''){
            setFormularioErro(true)
        } else {
            setFormularioErro(false)

            setAllProducts([...allProducts, newProductRegister])

            setProductName('')
            setProductPicture('')
            setProductPrice('')
        }


    }

    return (
        <main className={styles.oitavaAula}>

        <div className={styles.tittleWrapper}>
            <h1>Produtos</h1>
            <button onClick={addNewProduct}>Adicionar produto</button>
        </div>

        <div className={styles.wrappedForm}>

            <h1>Cadastrar novo produto</h1>

            <form className={formularioErro ? styles.formError : ''} >
                <div>
                    <label htmlFor="productName">Nome</label>
                    <input id="productName" value={productName} type="text" onChange={event => setProductName(event.target.value)}/>
                </div>

                <div>
                    <label htmlFor="price">Preço</label>
                    <input id="price" value={productPrice}  type="text"  onChange={event => setProductPrice(event.target.value)}/>
                </div>

                <div>
                    <label htmlFor="picture">Foto</label>
                    <input id="picture" value={productPicture} type="text" onChange={event => setProductPicture(event.target.value)}/>
                </div>

            </form>

            <button type='submit' onClick={event => registerProduct(event)}>Cadastrar</button>

        </div>

       

        <section className={styles.products}>
            {
                allProducts.map(
                    product => {
                        return (
                            <SetimaAulaCardProduto
                                productData={product}
                            />
                        )
                    }
                )
            }
        </section>
        </main>

    )
}
