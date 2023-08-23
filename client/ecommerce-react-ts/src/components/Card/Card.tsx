import { Link } from "react-router-dom"
import styles from "./Card.module.css"
import { Product } from "../../types"

interface Props {
  item: Product
  id: number
}

const Card = ({ item, id }: Props) => {
  const imgUrl = import.meta.env.VITE_STRAPI_URL + item.img.data.attributes.url
  const imgUrl2 = import.meta.env.VITE_STRAPI_URL + item.img2?.data.attributes.url

  return (
    <Link to={`/product/${id}`} className='link'>
      <div className={styles.Card} key={id}>
        <div className={styles.imgContainer}>
          {item.isNew && <span className={styles.newSeason}>New Season</span>}
          <img src={imgUrl} alt='' className={styles.firstImage} />
          {imgUrl2 && <img src={imgUrl2} alt='' className={styles.secondImage} />}
        </div>
        <h6 className='title'>{item.title}</h6>
        <span className={styles.price}>
          <span className={styles.prevPrice}>${item.price + 20}</span>${item.price}
        </span>
      </div>
    </Link>
  )
}

export default Card
