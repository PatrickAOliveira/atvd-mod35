import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Modal from '../../components/Modal'
import Sidebar from '../../components/Sidebar'
import { Cardapio, Food } from '../Home'

const Perfil = () => {
  const { id } = useParams()

  const [modalOpen, setModalOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [itemSelected, setItemSelected] = useState<Cardapio>()
  const [itemsOnCart, setItemsOnCart] = useState<Cardapio[]>([])
  const [cardapio, setCardapio] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res: Food) => {
        if (res && res.cardapio) {
          setCardapio(res.cardapio)
        }
      })
  }, [id])

  const openModal = (item: Cardapio) => {
    setItemSelected(item)
    setModalOpen(true)
  }

  const addToCart = (item: Cardapio) => {
    setItemsOnCart([...itemsOnCart, item])
    setModalOpen(false)
    setCartOpen(true)
  }

  const removeItem = (indexToRemove: number) => {
    setItemsOnCart(itemsOnCart.filter((_, index) => index !== indexToRemove))
  }

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Banner id={Number(id)} />
      <ProductsList itens={cardapio} type="cardapio" onOpenModal={openModal} />
      {itemSelected && (
        <Modal
          isOpen={modalOpen}
          item={itemSelected}
          closeModal={() => setModalOpen(false)}
          addToCart={() => itemSelected && addToCart(itemSelected)}
        />
      )}
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
