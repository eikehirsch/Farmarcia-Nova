import './styles.css'

const Card = () => {
  return (
    <>
      <li className="card-item">
        <span className="card-item-bold">
          Atendimento Aconchegante e Personalizado
        </span>
        : Em nossa farmácia, cada cliente é especial. Estamos aqui para ouvir,
        orientar e cuidar de você com atenção e carinho.
      </li>
      <li className="card-item">
        <span className="card-item-bold">
          Preços Justos e Competitivos:
        </span>{" "}
        Acreditamos que saúde de qualidade deve ser acessível. Por isso,
        oferecemos preços que cabem no seu bolso sem comprometer a qualidade.
      </li>
      <li className="card-item">
        <span className="card-item-bold">
          Facilidade e Confiabilidade:
        </span>{" "}
        Com um processo de compra simplificado e entrega rápida, garantimos que
        você receba o que precisa sem complicações.
      </li>
    </>
  );
};

export default Card;
