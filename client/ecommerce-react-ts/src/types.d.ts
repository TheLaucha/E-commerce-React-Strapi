export interface PreProduct {
  attributes: Product
  id: number
  quantity: number
}

export interface ProductCart {
  id: number
  title: string
  desc: string
  img: string
  price: number
  quantity: number
}

export interface Product {
  title: string
  desc: string
  price: number
  isNew: boolean
  type: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  img: Image
  img2: Image
  categories: { data: Category[] }
  sub_categories: { data: SubCategory[] }
}

export interface SubCategory {
  id: number
  attributes: {
    createdAt: string
    publishedAt: string
    title: string
    updatedAt: string
  }
}

export interface ImageData {
  id: number
  data: {
    attributes: {
      name: string
      alternativeText: string | null
      caption: string | null
      width: number
      height: number
      formats: {
        small: ImageFormat
        thumbnail: ImageFormat
        // Puedes agregar más formatos si los hay
      }
      hash: string
      ext: string
      mime: string
      size: number
      url: string
      previewUrl: string | null
      provider: string
      provider_metadata: any | null // Dependiendo de la estructura, puedes ajustar este tipo
      createdAt: string
      updatedAt: string
    }
  }
}

interface ImageFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
}

interface Category {
  id: number
  attributes: {
    title: string
    desc: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

interface Image {
  data: Data
}

interface Data {
  id: number
  attributes: Attributes
}

interface Attributes {
  name: string
  alternativeText: null | string
  caption: null | string
  width: number
  height: number
  formats: {
    small: Format
    thumbnail: Format
    // Puedes agregar más formatos si los hay
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null | string
  provider: string
  provider_metadata: null
  createdAt: string
  updatedAt: string
}

interface Format {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null | string
  size: number
  width: number
  height: number
}
