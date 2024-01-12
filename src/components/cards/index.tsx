import './Cards.scss';

interface prop {
  image: string;
  title: string;
  price: string;
  product: any;
  onOpenModal: any;
}

const Cards: React.FC<prop> = ({ image, title, price, onOpenModal, product }) => {
  return (
    <div className="cards-container">
      <img src={image} alt="" />
      <h4 className='title-card'>
        {title}
      </h4>
      <p className='old-price'>
        R$ 20,000
      </p>
      <p className='add-price'>
        {price}
      </p>
      <p className='bet-price'>
        ou 5x de 3.000 sem juros
      </p>
      <p className='frete-gratis'>
        Frete grátis
      </p>
      <button
        className='button-buy'
        onClick={() => onOpenModal(product)}
      >
        Comprar
      </button>
    </div>
  )
}
export default Cards;
