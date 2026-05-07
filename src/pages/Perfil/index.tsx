import { useParams } from 'react-router-dom'
import { useState } from 'react'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import { itens2 } from '../../data'
import Food from '../../models/Food'
import Modal from '../../components/Modal'

const Perfil = () => {
  const { id } = useParams()

  const [modalOpen, setModalOpen] = useState(false)
  const [itemSelected, setItemSelected] = useState<Food | null>(null)

  const openModal = (item: Food) => {
    setItemSelected(item)
    setModalOpen(true)
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
      />
    </>
  )
}

export default Perfil
