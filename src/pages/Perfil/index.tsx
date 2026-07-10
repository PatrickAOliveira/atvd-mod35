/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Modal from '../../components/Modal'
import Sidebar from '../../components/Sidebar'
import { Cardapio } from '../Home'
import { useGetCardapiosQuery } from '../../services/api'
import { open as openM, close as closeM } from '../../store/reducers/modal'
import { add, open as openC } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Perfil = () => {
  const { id } = useParams()
  const { data: cardapio } = useGetCardapiosQuery(id!)
  const dispatch = useDispatch()
  const { itemSelected } = useSelector((state: RootReducer) => state.modal)

  const openModal = (item: Cardapio) => {
    dispatch(openM(item))
  }

  const addToCart = (item: Cardapio) => {
    dispatch(add(item))
    dispatch(openC())
    dispatch(closeM())
  }

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Banner id={id!} />
      <ProductsList
        itens={cardapio.cardapio}
        type="cardapio"
        onOpenModal={openModal}
      />
      {itemSelected && (
        <Modal
          item={itemSelected}
          addToCart={() => itemSelected && addToCart(itemSelected)}
        />
      )}
      <Sidebar />
    </>
  )
}

export default Perfil
