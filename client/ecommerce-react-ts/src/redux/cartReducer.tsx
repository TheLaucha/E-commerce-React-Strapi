import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { ProductCart } from "../types"

export interface CartState {
  products: Array<ProductCart>
}

const initialState: CartState = {
  products: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductCart>) => {
      const item = state.products.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.products.push(action.payload)
      }
    },
    removeItem: (state, action: PayloadAction<ProductCart>) => {
      state.products = state.products.filter((item) => item.id !== action.payload.id)
    },
    resetCart: (state) => {
      state.products = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions

export default cartSlice.reducer
