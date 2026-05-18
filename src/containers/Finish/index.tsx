import Button from '../../components/Button'
import { Descricao } from '../../components/Product/styles'
import { Container, FormButton, FormTitulo } from '../Delivery/styles'

const Finish = () => (
  <Container>
    <FormTitulo>{`Pedido realizado - {ORDER_ID}`}</FormTitulo>
    <Descricao>
      Estamos felizes em informar que seu pedido já está em processo de
      preparação e, em breve, será entregue no endereço fornecido.
    </Descricao>
    <Descricao>
      Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
      realizar cobranças extras.
    </Descricao>
    <Descricao>
      Lembre-se da importância de higienizar as mãos após o recebimento do
      pedido, garantindo assim sua segurança e bem-estar durante a refeição
    </Descricao>
    <Descricao>
      Esperamos que desfrute de uma deliciosa e agradável experiência
      gastronômica. Bom apetite!
    </Descricao>
    <FormButton>
      <Button type="button" title="Concluir">
        Concluir
      </Button>
    </FormButton>
  </Container>
)

export default Finish
