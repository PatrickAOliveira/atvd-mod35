import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

type ModalState = {
  itemSelected: Cardapio | null
  isOpen: boolean
}

const initialState: ModalState = {
  itemSelected: null,
  isOpen: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<Cardapio>) => {
      state.isOpen = true
      state.itemSelected = action.payload
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { open, close } = modalSlice.actions
export default modalSlice.reducer
