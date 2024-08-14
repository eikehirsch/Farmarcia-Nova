import './styles.css'

const Body = () => {
  return (
    <div className='body-container'>
      <h1 className='body-title'>Descubra o Novo Conceito em Cuidado e Saúde na Farmárcia!</h1>
      <p className='body-paragraph'>Você merece o melhor quando se trata de sua saúde e bem-estar, e é exatamente isso que oferecemos na Farmárcia! Com um compromisso inabalável com a qualidade e um atendimento personalizado, somos a sua escolha de confiança para todas as suas necessidades farmacêuticas.</p>
      <div className='body-subcontainer'>
        <img className='body-container-img' src="./images/farmarcia-placa.png" alt="" />

        <ul className='body-subcontainer-list'>
          <li>
          <span className='body-subcontainer-item-bold'>Atendimento Aconchegante e Personalizado</span>: Em nossa farmácia, cada cliente é especial. Estamos aqui para ouvir, orientar e cuidar de você com atenção e carinho.
          </li>
          <li><span className='body-subcontainer-item-bold'>Preços Justos e Competitivos:</span> Acreditamos que saúde de qualidade deve ser acessível. Por isso, oferecemos preços que cabem no seu bolso sem comprometer a qualidade.
          </li>
          <li>
          <span className='body-subcontainer-item-bold'>Facilidade e Confiabilidade:</span> Com um processo de compra simplificado e entrega rápida, garantimos que você receba o que precisa sem complicações.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Body