import styles from "./Cart.module.css"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import { useDispatch, useSelector } from "react-redux"
import { ProductCart } from "../../types"
import { useEffect, useState } from "react"
import { removeItem, resetCart } from "../../redux/cartReducer"

const Cart = () => {
  const products = useSelector((state: any) => state.cart.products)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const dispatch = useDispatch()

  useEffect(() => {
    let total = 0
    products.forEach((item: ProductCart) => (total += item.quantity * item.price))
    setTotalPrice(total)
  }, [products])

  const handleRemoveItem = (el: ProductCart) => {
    dispatch(removeItem(el))
  }

  const handleResetCart = () => {
    dispatch(resetCart())
  }

  return (
    <div className={styles.Cart}>
      <h2>Products in your cart</h2>
      {products.map((el: ProductCart) => {
        return (
          <div className={styles.item} key={el.id}>
            <img src={el.img} alt='' />
            <div className={styles.details}>
              <h3>{el.title}</h3>
              <p>{el.desc.substring(0, 30)}</p>
              <span>
                {el.quantity}x${el.price}
              </span>
            </div>
            <div onClick={() => handleRemoveItem(el)}>
              <DeleteOutlinedIcon className={styles.deleteIcon}></DeleteOutlinedIcon>
            </div>
          </div>
        )
      })}
      <div className={styles.total}>
        <span>SUBTOTAL</span>
        <span>${totalPrice.toFixed()}</span>
      </div>
      <button className={styles.checkoutBtn}>PROCEED TO CHEKOUT</button>
      <span className={styles.resetBtn} onClick={handleResetCart}>
        Reset Cart
      </span>
    </div>
  )
}

export default Cart
