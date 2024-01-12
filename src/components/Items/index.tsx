import { ItemsImage } from '../utils/ImagesSchema';
import './items.scss';

const Items = () => {
  return (
    <div className="container">
      <ul className='menu-items'>
        <li>
          <div className="container-items container-items-active">
            <img src={ItemsImage.Tec} alt='Tecnologia' />
          </div>
          <p className='red-color'>Tecnologia</p>
        </li>
        <li>
          <div className="container-items">
            <img src={ItemsImage.Mec} alt='Supermercado' />
          </div>
          <p>Supermercado</p>
        </li>
        <li>
          <div className="container-items">
            <img src={ItemsImage.Beb} alt='Bebidas' />
          </div>
          <p>Bebidas</p>
        </li>
        <li>
          <div className="container-items">
            <img src={ItemsImage.Fer} alt='Ferramentas' />
          </div>
          <p>Ferramentas</p>
        </li>
        <li>
          <div className="container-items">
            <img src={ItemsImage.Sau} alt='Saúde' />
          </div>
          <p>Saúde</p>
        </li>
        <li>
          <div className="container-items">
            <img src={ItemsImage.Esp} alt='Esporte e Fitness' />
          </div>
          <p>Esporte e Fitness</p>
        </li>
        <li>
          <div className="container-items">
            <img src={ItemsImage.Mod} alt='Moda' />
          </div>
          <p>Moda</p>
        </li>
      </ul>
      <h1 className='midle-title red-color'>Produtos relacionados</h1>
      <ul className='table-menu'>
        <li className='red-color'>
          Celular
        </li>
        <li>
          Acessórios
        </li>
        <li>
          Tablets
        </li>
        <li>
          Notebooks
        </li>
        <li>
          Tvs
        </li>
        <li>
          Ver Todos
        </li>
      </ul>
    </div>
  )
}

export default Items;
