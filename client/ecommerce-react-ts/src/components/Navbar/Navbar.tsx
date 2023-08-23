import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import SearchIcon from "@mui/icons-material/Search"
import PersonIcon from "@mui/icons-material/Person"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import { useState } from "react"
import Cart from "../Cart/Cart"
import { useSelector } from "react-redux"

const Navbar = () => {
  const [showCart, setShowCart] = useState<boolean>(false)
  const products = useSelector((state: any) => state.cart.products)

  return (
    <nav className={styles.navbar}>
      <ul className={styles.left}>
        <li className={`${styles.item} ${styles.disabled}`}>
          <img
            src='https://www.svgrepo.com/show/508668/flag-us.svg'
            alt='english flag'
            className={styles.flagImg}
          />
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </li>
        <li className={`${styles.item} ${styles.disabled}`}>
          <span>USD</span>
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </li>
        <li className={styles.item}>
          <Link className='link' to='/products/women'>
            Women
          </Link>
        </li>
        <li className={styles.item}>
          <Link className='link' to='/products/men'>
            Men
          </Link>
        </li>
        <li className={`${styles.item} ${styles.disabled}`}>
          <Link className='link' to='/products/children'>
            Children
          </Link>
        </li>
        <li className={`${styles.item} ${styles.disabled}`}>
          <Link className='link' to='/products/accesories'>
            Accessories
          </Link>
        </li>
      </ul>
      <div className={styles.center}>
        <Link className='link' to='/'>
          THE STORE
        </Link>
      </div>
      <ul className={styles.right}>
        <li className={styles.item}>
          <Link className='link' to='/'>
            Homepage
          </Link>
        </li>
        <li className={`${styles.item} ${styles.disabled}`}>
          <Link className='link' to='/about'>
            About
          </Link>
        </li>
        <li className={`${styles.item} ${styles.disabled}`}>
          <Link className='link' to='/contact'>
            Contact
          </Link>
        </li>
        <li className={`${styles.item} ${styles.disabled}`}>
          <Link className='link' to='/stores'>
            Stores
          </Link>
        </li>
        <li className={`${styles.item} ${styles.disabled} ${styles.icon}`}>
          <SearchIcon></SearchIcon>
        </li>
        <li className={`${styles.item} ${styles.disabled} ${styles.icon}`}>
          <PersonIcon></PersonIcon>
        </li>
        <li className={`${styles.item} ${styles.disabled} ${styles.icon}`}>
          <FavoriteBorderIcon></FavoriteBorderIcon>
        </li>
        <li
          className={`${styles.item} ${styles.cartIcon} ${styles.icon}`}
          onClick={() => setShowCart(!showCart)}
        >
          <ShoppingCartIcon></ShoppingCartIcon>
          <span>{products.length}</span>
        </li>
      </ul>
      {showCart && <Cart></Cart>}
    </nav>
  )
}

export default Navbar
