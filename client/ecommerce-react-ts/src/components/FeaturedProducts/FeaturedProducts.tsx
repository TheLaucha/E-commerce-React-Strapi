import { useEffect, useState } from "react"
import Card from "../Card/Card"
import styles from "./FeaturedProducts.module.css"
import { PreProduct } from "../../types"
import useFetch from "../../hooks/useFetch"

interface Props {
  type: string
  hola?: string
}

const FeaturedProducts = ({ type }: Props) => {
  const [products, setProducts] = useState<Array<PreProduct>>([])

  const apiUrl: string =
    import.meta.env.VITE_STRAPI_API_URL + `/products?populate=*&filters[type][$eq]=${type}`

  console.log(apiUrl)

  const { fetchData, loading, error } = useFetch(apiUrl)

  useEffect(() => {
    setProducts(fetchData)
  }, [fetchData])

  return (
    <div className={styles.FeaturedProducts}>
      <header>
        <h2>{type} products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi doloremque eaque
          vitae provident, aperiam odio iure harum atque sint unde porro recusandae quos
          reprehenderit, nesciunt eum tenetur! Sed, sequi?
        </p>
      </header>
      <main className={styles.cardContainer}>
        {error
          ? "Something went wrong!"
          : loading
          ? "Loading..."
          : products.map((el) => {
              return <Card item={el.attributes} id={el.id} key={el.id}></Card>
            })}
      </main>
    </div>
  )
}

export default FeaturedProducts
