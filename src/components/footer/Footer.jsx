import './styles.css'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <img className='footer-img' src="./images/farmarcia.png" alt="" />

      <div className='footer-subcontainer'>
        <div className='footer-subcontainer-card'>
            <span>
                Horário de Funcionamento:
            </span>
            <span>
                Segunda a Sexta: 08:00 - 18:00
                Domingo: Fechado
            </span>
            <span>
                Sábado: 08:00 - 13:00
            </span>
            <span>
                Domingo: Fechado
            </span>
        </div>
        <div className='footer-subcontainer-card'>
            <span>
                Redes Sociais:
            </span>
            <span>
                Facebook: [Link do Facebook]
            </span>
            <span>
                Instagram: [Link do Instagram]
            </span>
            <span>
                Twitter: [Link do Twitter]
            </span>
            <span>
              LinkedIn: [Link do LinkedIn]
            </span>
        </div>
      </div>
      <div className='footer-subcontainer-card'>
            <span>
                Contato:
            </span>
            <span>
                WhatsApp: [Número de WhatsApp]
            </span>
            <span>
               E-mail: [Email de Contato]
            </span>
        </div>
    </footer>
  )
}





export default Footer