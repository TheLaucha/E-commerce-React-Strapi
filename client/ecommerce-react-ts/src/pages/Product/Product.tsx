import { useEffect, useState } from "react"
import styles from "./Product.module.css"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import BalanceIcon from "@mui/icons-material/Balance"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import useFetch from "../../hooks/useFetch"
import { useParams } from "react-router-dom"
import { PreProduct } from "../../types"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/cartReducer"

const Product = () => {
  const dispatch = useDispatch()
  const [selectedImage, setSelectedImage] = useState<number>(0)
  const [quantity, setQuantity] = useState<number>(1)
  const [data, setData] = useState<any>()

  const imgUrl1 = import.meta.env.VITE_STRAPI_URL + data?.attributes?.img.data.attributes.url
  const imgUrl2 = import.meta.env.VITE_STRAPI_URL + data?.attributes?.img2.data.attributes.url

  const images = [imgUrl1, imgUrl2]

  const { id } = useParams()

  const apiUrl: string = import.meta.env.VITE_STRAPI_API_URL + `/products/${id}?populate=*`
  const { fetchData, loading, error } = useFetch(apiUrl)

  useEffect(() => {
    setData(fetchData)
  }, [fetchData])

  console.log(data)

  return (
    <div className={styles.Product}>
      {/* {error ? (
        "Something went wrong!"
      ) : loading ? (
        "Loading..."
      ) : (
        <>
          <div className={styles.left}>
            <div className={styles.images}>
              <img src={imgUrl1} onClick={() => setSelectedImage(0)} />
              <img src={imgUrl2} onClick={() => setSelectedImage(1)} />
            </div>
            <div className={styles.mainImage}>
              <img src={images[selectedImage]} alt='' />
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>{data?.attributes?.title}</h2>
            <span className={styles.price}>${data?.attributes?.price}</span>
            <p className={styles.description}>{data?.attributes?.desc}</p>
            <div className={styles.quantityBox}>
              <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
              <span className={styles.quantity}>{quantity}</span>
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className={styles.addBtn}
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: import.meta.env.VITE_STRAPI_URL + data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className={styles.icons}>
              <button>
                <FavoriteBorderIcon /> ADD TO WISHLIST
              </button>
              <button>
                <BalanceIcon /> ADD TO COMPARE
              </button>
            </div>
            <div className={styles.info}>
              <span>Vendor: Polo</span>
              <span>
                Product Type:{" "}
                {data?.attributes?.sub_categories?.data.map(
                  (el: PreProduct) => el?.attributes?.title
                )}
              </span>
              <span>Tag: T-Shirt, Men, Top</span>
            </div>
            <hr />
            <div className={styles.info}>
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )} */}
      {loading ? (
        "Loading..."
      ) : data ? (
        <>
          <div className={styles.left}>
            <div className={styles.images}>
              <img src={imgUrl1} onClick={() => setSelectedImage(0)} />
              <img src={imgUrl2} onClick={() => setSelectedImage(1)} />
            </div>
            <div className={styles.mainImage}>
              <img src={images[selectedImage]} alt='' />
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>{data?.attributes?.title}</h2>
            <span className={styles.price}>${data?.attributes?.price}</span>
            <p className={styles.description}>{data?.attributes?.desc}</p>
            <div className={styles.quantityBox}>
              <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
              <span className={styles.quantity}>{quantity}</span>
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className={styles.addBtn}
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: import.meta.env.VITE_STRAPI_URL + data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className={styles.icons}>
              <button>
                <FavoriteBorderIcon /> ADD TO WISHLIST
              </button>
              <button>
                <BalanceIcon /> ADD TO COMPARE
              </button>
            </div>
            <div className={styles.info}>
              <span>Vendor: Polo</span>
              <span>
                Product Type:{" "}
                {data?.attributes?.sub_categories?.data.map(
                  (el: PreProduct) => el?.attributes?.title
                )}
              </span>
              <span>Tag: T-Shirt, Men, Top</span>
            </div>
            <hr />
            <div className={styles.info}>
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      ) : (
        "Something went wrong!"
      )}
    </div>
  )
}

export default Product
