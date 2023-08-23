import styles from "./Contact.module.css"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import GoogleIcon from "@mui/icons-material/Google"
import PinterestIcon from "@mui/icons-material/Pinterest"

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <p>BE IN TOUCH WITH US</p>
      <form className={styles.form}>
        <input type='email' placeholder='Enter your e-mail' />
        <button>JOIN US</button>
      </form>
      <div className={styles.rrssIcons}>
        <FacebookIcon></FacebookIcon>
        <InstagramIcon></InstagramIcon>
        <TwitterIcon></TwitterIcon>
        <GoogleIcon></GoogleIcon>
        <PinterestIcon></PinterestIcon>
      </div>
    </div>
  )
}

export default Contact
