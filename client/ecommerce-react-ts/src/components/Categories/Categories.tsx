import { Link } from "react-router-dom"
import styles from "./Categories.module.css"

interface Categorie {
  imgUrl: string
  categorieName: string
}

const Categories = () => {
  const categories: Categorie[] = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=878&q=80",
      categorieName: "NEW SEASON",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      categorieName: "MEN",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1584093091778-e7f4e76e8063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      categorieName: "SALE",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=879&q=80",
      categorieName: "SHOES",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1625204614387-6509254d5b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      categorieName: "ACCESSORIES",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      categorieName: "WOMEN",
    },
  ]

  return (
    <div className={styles.Categories}>
      <div className={styles.col}>
        <div className={styles.row}>
          <img src={categories[0].imgUrl} alt='' />
          <button>
            <Link className='link' to={`/products/${categories[0].categorieName}`}>
              {categories[0].categorieName}
            </Link>
          </button>
        </div>
        <div className={styles.row}>
          <img src={categories[1].imgUrl} alt='' />
          <button>
            <Link className='link' to={`/products/${categories[1].categorieName}`}>
              {categories[1].categorieName}
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <img src={categories[2].imgUrl} alt='' />
          <button>
            <Link className='link' to={`/products/${categories[2].categorieName}`}>
              {categories[2].categorieName}
            </Link>
          </button>
        </div>
      </div>
      <div className={`${styles.col} ${styles.col_lg}`}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.row}>
              <img src={categories[3].imgUrl} alt='' />
              <button>
                <Link className='link' to={`/products/${categories[3].categorieName}`}>
                  {categories[3].categorieName}
                </Link>
              </button>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.row}>
              <img src={categories[4].imgUrl} alt='' />
              <button>
                <Link className='link' to={`/products/${categories[4].categorieName}`}>
                  {categories[4].categorieName}
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <img src={categories[5].imgUrl} alt='' />
          <button>
            <Link className='link' to={`/products/${categories[5].categorieName}`}>
              {categories[5].categorieName}
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
