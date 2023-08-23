import Categories from "../../components/Categories/Categories"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Slider from "../../components/Slider/Slider"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div className={styles.Home}>
      <Slider></Slider>
      <FeaturedProducts type='Featured'></FeaturedProducts>
      <Categories></Categories>
      <FeaturedProducts type='Trending'></FeaturedProducts>
    </div>
  )
}

export default Home
