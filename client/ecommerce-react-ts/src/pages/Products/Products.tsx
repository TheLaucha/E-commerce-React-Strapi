import { useEffect, useState } from "react"
import styles from "./Products.module.css"
import List from "../../components/List/List"
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { SubCategory } from "../../types"

const Products = () => {
  const [priceRange, setPriceRange] = useState<number>(250)
  const [sortBy, setSortBy] = useState<string>("")
  const categoryId = useParams().id
  const [subCategoriesData, setSubCategoriesData] = useState<Array<SubCategory>>([])
  const [selectedSubCategories, setSelectedSubCategories] = useState<Array<string>>([])

  const apiUrl: string =
    import.meta.env.VITE_STRAPI_API_URL +
    `/sub-categories?[filters][categories][title][$eq]=${categoryId}`
  const { fetchData: fetchSubCategories, loading, error } = useFetch(apiUrl)

  useEffect(() => {
    setSubCategoriesData(fetchSubCategories)
  }, [fetchSubCategories])

  const handleChangeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(parseInt(e.target.value))
  }

  const handleChangeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked
    isChecked
      ? setSelectedSubCategories([...selectedSubCategories, e.target.value])
      : setSelectedSubCategories(selectedSubCategories.filter((el) => el !== e.target.value))
  }

  return (
    <div className={styles.Products}>
      <div className={styles.left}>
        <div className={styles.filterItem}>
          <h2>Product Categories</h2>
          {loading
            ? "Loading..."
            : error
            ? "Something went wrong!"
            : subCategoriesData.map((el) => {
                const { id } = el
                const { title } = el.attributes
                return (
                  <div className={styles.inputItem} key={id}>
                    <input type='checkbox' id={`${id}`} value={id} onChange={handleChangeSelect} />
                    <label htmlFor={`${id}`}>{title}</label>
                  </div>
                )
              })}
        </div>
        <div className={styles.filterItem}>
          <h2>Filter by price</h2>
          <div className={styles.inputItem}>
            <span>$10</span>
            <input
              type='range'
              min={10}
              max={250}
              step={10}
              value={priceRange}
              onChange={handleChangeRange}
            />
            <span>$250</span>
          </div>
          <span>{priceRange}</span>
        </div>
        <div className={styles.filterItem}>
          <h2>Sort by</h2>
          <div className={styles.inputItem}>
            <input
              type='radio'
              name='price'
              id='asc'
              value={"asc"}
              onChange={(e) => setSortBy(e.target.value)}
            />
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className={styles.inputItem}>
            <input
              type='radio'
              name='price'
              id='desc'
              value={"desc"}
              onChange={(e) => setSortBy(e.target.value)}
            />
            <label htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img
          src='https://images.unsplash.com/photo-1469050624972-f03b8678e363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
          alt='Two people in the desert'
          className={styles.bannerImg}
        />
        <List
          catId={categoryId}
          maxPrice={priceRange}
          sortBy={sortBy}
          subCats={selectedSubCategories}
        ></List>
      </div>
    </div>
  )
}

export default Products
