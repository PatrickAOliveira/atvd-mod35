import Button from '../../components/Button'
import {
  Campo,
  Container,
  FormButton,
  FormContainer,
  FormGroup,
  FormItem,
  Rotulo,
  FormTitulo
} from '../Delivery/styles'

type Props = {
  onFinish: () => void
  onBack: () => void
  subtotal: string
}

const Payment = ({ onBack, onFinish, subtotal }: Props) => (
  <Container>
    <FormTitulo>Pagamento - Valor a pagar {subtotal}</FormTitulo>
    <FormContainer>
      <FormItem>
        <Rotulo htmlFor="nome-cartao">Nome no cartão</Rotulo>
        <Campo type="text" id="nome-cartao" />
      </FormItem>
      <FormGroup>
        <FormItem style={{ flex: 3 }}>
          <Rotulo htmlFor="num-cartao">Número no cartão</Rotulo>
          <Campo type="text" id="num-cartao" />
        </FormItem>
        <FormItem style={{ flex: 1 }}>
          <Rotulo htmlFor="cvv">CVV</Rotulo>
          <Campo type="text" id="cvv" />
        </FormItem>
      </FormGroup>
      <FormGroup>
        <FormItem style={{ flex: 2 }}>
          <Rotulo htmlFor="m-vencimento">Mês de vencimento</Rotulo>
          <Campo type="text" id="m-vencimento" />
        </FormItem>
        <FormItem>
          <Rotulo htmlFor="a-vencimento">Ano de Vencimento</Rotulo>
          <Campo type="text" id="a-vencimento" />
        </FormItem>
      </FormGroup>
      <FormButton>
        <Button type="button" title="finalizar" onClick={onFinish}>
          Finalizar pagamento
        </Button>
        <Button type="button" title="edição de endereço" onClick={onBack}>
          Voltar para a edição de endereço
        </Button>
      </FormButton>
    </FormContainer>
  </Container>
)

export default Payment
