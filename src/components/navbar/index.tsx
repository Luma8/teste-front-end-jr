import './navbar.scss';
//icons
import Logo from '../../assets/NavIcons/Logo.svg'
import { NavImage } from '../utils/ImagesSchema';

const Navbar = () => {
  return (
    <nav className='container'>
      <div className="top-nav-items">
        <ul className="list-items">
          <li className="items grey-color">
            <img src={NavImage.Shi} alt='Shield' />
            Compra 
            <span className='red-color'> 100% segura</span>
          </li>
          <li className="items red-color">
            <img src={NavImage.Tru} alt='truck' />
            Frete grátis
            <span className='grey-color'> acima de R$ 200</span>
          </li>
          <li className="items red-color">
            <img src={NavImage.Cre} alt='credit card' />
            Parcela
            <span className='grey-color'> suas compras</span>
          </li>
        </ul>
      </div>
      <div className="midle-nav-items">
        <img className='logo-size' src={Logo} />
        <div className='search-items'>
          <input type="text" name="Search" placeholder='O que Você esta buscando?' id="" />
          <img src={NavImage.Gla} alt='Glass' />
        </div>
        <ul className='list-icons'>
          <li>
            <a href="#">
              <img src={NavImage.Box} alt='box' />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={NavImage.Her} alt='herth' />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={NavImage.Use} alt='User' />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={NavImage.Sho} alt='shop car' />
            </a>
          </li>
        </ul>
        <div></div>
      </div>
      <div className="nav-bottom-items">
        <ul className='bottom-list'>
          <li className='grey-color'>
            Toda Categorias
          </li>
          <li className='grey-color'>
            Supermercado
          </li>
          <li className='grey-color'>
            Livros
          </li>
          <li className='grey-color'>
            Moda
          </li>
          <li className='red-color'>
            Lançamentos
          </li>
          <li className='grey-color'>
            Ofertas do dia
          </li>
          <li className='grey-color'>
            <img src={NavImage.Cro} alt='coroa' />
            Assinatura
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;