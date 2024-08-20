import './styles.css'
import Card from "../card/Card"

const Body = () => {
  return (
    <div className='body-container'>
      <h1 className='body-title'>Descubra o Novo Conceito em Cuidado e Saúde na Farmárcia!</h1>
      <p className='body-paragraph'>Você merece o melhor quando se trata de sua saúde e bem-estar, e é exatamente isso que oferecemos na Farmárcia! Com um compromisso inabalável com a qualidade e um atendimento personalizado, somos a sua escolha de confiança para todas as suas necessidades farmacêuticas.</p>
      <div className='body-subcontainer'>
        <img className='body-container-img' src="./images/farmarcia-placa.png" alt="" />

        <ul className='body-subcontainer-list'>
          <Card />
        </ul>
      </div>
    </div>
  )
}

export default Body