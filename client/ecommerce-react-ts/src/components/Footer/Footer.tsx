import { Link } from "react-router-dom"
import imgPaymentMethods from "../../assets/payments_methods.png"
import styles from "./Footer.module.css"
import Contact from "../Contact/Contact"

const Footer = () => {
  return (
    <>
      <Contact></Contact>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className='categories'>
              <h4>Categories</h4>
              <Link to='/products/women' className='link'>
                Women
              </Link>
              <Link to='/products/men' className='link'>
                Men
              </Link>
              <Link to='/products/shoes' className='link'>
                Shoes
              </Link>
              <Link to='/products/accessories' className='link'>
                Accesories
              </Link>
              <Link to='/products/new' className='link'>
                New Arrivals
              </Link>
            </div>
            <div className='links'>
              <h4>Links</h4>
              <Link to='/faq' className='link'>
                FAQ
              </Link>
              <Link to='/pages' className='link'>
                Pages
              </Link>
              <Link to='/stores' className='link'>
                Stores
              </Link>
              <Link to='/compare' className='link'>
                Compare
              </Link>
              <Link to='/cookies' className='link'>
                Cookies
              </Link>
            </div>
          </div>
          <div className={styles.right}>
            <div className='about'>
              <h4>About</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ex cupiditate
                doloremque itaque ipsum iure tempora qui numquam et aliquid voluptas, iusto
                similique hic quaerat quae! Iusto ut assumenda aliquam deserunt rerum provident
                reprehenderit voluptas ducimus, modi, quam ratione fuga molestias eligendi quia
                animi incidunt atque saepe harum soluta autem?
              </p>
            </div>
            <div className='contact'>
              <h4>Contact</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ex cupiditate
                doloremque itaque ipsum iure tempora qui numquam et aliquid voluptas, iusto
                similique hic quaerat quae! Iusto ut assumenda aliquam deserunt rerum provident
                reprehenderit voluptas ducimus, modi, quam ratione fuga molestias eligendi quia
                animi incidunt atque saepe harum soluta autem?
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <h5>LAUCHASTORE</h5>
            <p>© 2023 - All Rights Reserverd</p>
          </div>
          <div className={styles.right}>
            <img src={imgPaymentMethods} alt='' />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
