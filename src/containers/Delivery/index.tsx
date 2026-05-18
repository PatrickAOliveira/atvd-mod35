import Button from '../../components/Button'
import {
  Campo,
  Container,
  FormContainer,
  FormItem,
  FormGroup,
  Rotulo,
  FormTitulo,
  FormButton
} from './styles'

type Props = {
  nextStep: () => void
  onBack: () => void
}

const Delivery = ({ nextStep, onBack }: Props) => (
  <Container>
    <FormTitulo>Entrega</FormTitulo>
    <FormContainer>
      <FormItem>
        <Rotulo htmlFor="nome">Quem irá receber</Rotulo>
        <Campo type="text" id="nome" />
      </FormItem>
      <FormItem>
        <Rotulo htmlFor="endereco">Endereço</Rotulo>
        <Campo type="text" id="endereco" />
      </FormItem>
      <FormItem>
        <Rotulo htmlFor="cidade">Cidade</Rotulo>
        <Campo type="text" id="cidade" />
      </FormItem>
      <FormGroup>
        <FormItem>
          <Rotulo htmlFor="cep">CEP</Rotulo>
          <Campo type="text" id="cep" />
        </FormItem>
        <FormItem>
          <Rotulo htmlFor="numero">Número</Rotulo>
          <Campo type="text" id="numero" />
        </FormItem>
      </FormGroup>
      <FormItem>
        <Rotulo htmlFor="complemento">Complemento (opcional)</Rotulo>
        <Campo type="text" id="complemento" />
      </FormItem>
      <FormButton>
        <Button type="button" title="ir para o pagamento" onClick={nextStep}>
          Continuar com o pagamento
        </Button>
        <Button type="button" title="voltar para o carrinho" onClick={onBack}>
          Voltar para o carrinho
        </Button>
      </FormButton>
    </FormContainer>
  </Container>
)

export default Delivery
