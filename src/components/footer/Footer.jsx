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
                Facebook: www.facebook.com/farmarcia
            </span>
            <span>
                Instagram: www.instagram.com/farmarcia
            </span>
            <span>
                Twitter: www.twitter.com/farmarcia
            </span>
            <span>
              LinkedIn: www.linkedin.com/farmarcia
            </span>
        </div>
      </div>
      <div className='footer-subcontainer-card'>
            <span>
                Contato:
            </span>
            <span>
                WhatsApp: 45 9 9834-5671
            </span>
            <span>
               E-mail: farmarcia@atendimento.com.br
            </span>
        </div>
    </footer>
  )
}





export default Footer