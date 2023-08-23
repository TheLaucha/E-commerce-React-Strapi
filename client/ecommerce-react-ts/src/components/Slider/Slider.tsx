import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft"
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
import styles from "./Slider.module.css"
import { useState } from "react"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const data: Array<string> = [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1612731486606-2614b4d74921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80",
  ]

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(data.length - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const nextSlide = () => {
    if (currentSlide === data.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        <img src={data[currentSlide]} className={styles.active}></img>
      </div>
      <div className={styles.icons}>
        <div className={styles.iconContainer} onClick={prevSlide}>
          <ArrowCircleLeftIcon className={styles.icon}></ArrowCircleLeftIcon>
        </div>
        <div className={styles.iconContainer} onClick={nextSlide}>
          <ArrowCircleRightIcon className={styles.icon}></ArrowCircleRightIcon>
        </div>
      </div>
    </div>
  )
}

export default Slider
