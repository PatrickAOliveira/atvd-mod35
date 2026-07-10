import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'
import { Container } from '../../components/Sidebar'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
  step: Container
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 'cart'
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    setContainer: (state, action: PayloadAction<Container>) => {
      state.step = action.payload
    }
  }
})

export const { add, remove, open, close, setContainer } = cartSlice.actions
export default cartSlice.reducer
