import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { itens2 } from '../../data'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Food from '../../models/Food'
import Modal from '../../components/Modal'
import Sidebar from '../../components/Sidebar'

const Perfil = () => {
  const { id } = useParams()

  const [modalOpen, setModalOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [itemSelected, setItemSelected] = useState<Food | null>(null)
  const [itemsOnCart, setItemsOnCart] = useState<Food[]>([])

  const openModal = (item: Food) => {
    setItemSelected(item)
    setModalOpen(true)
  }

  const addToCart = (item: Food) => {
    setItemsOnCart([...itemsOnCart, item])
    setModalOpen(false)
    setCartOpen(true)
  }

  const removeItem = (indexToRemove: number) => {
    setItemsOnCart(itemsOnCart.filter((_, index) => index !== indexToRemove))
  }

  return (
    <>
      <Header />
      <Banner id={Number(id)} />
      <ProductsList itens={itens2} type="produto" onOpenModal={openModal} />
      <Modal
        isOpen={modalOpen}
        item={itemSelected}
        closeModal={() => setModalOpen(false)}
        addToCart={() => itemSelected && addToCart(itemSelected)}
      />
      <Sidebar
        isOpen={cartOpen}
        items={itemsOnCart}
        closeCart={() => setCartOpen(false)}
        removeItem={removeItem}
      />
    </>
  )
}

export default Perfil
