import { Tec, Mec, Beb, Fer, Sau, Esp, Mod, } from '../utils/imageItems';
import './items.scss';

const Items = () => {
  return (
    <div className="container">
      <ul className='menu-items'>
        <li>
          <div className="container-items container-items-active">
            <img src={Tec} alt='Tecnologia' />
          </div>
          <p className='red-color'>Tecnologia</p>
        </li>
        <li>
          <div className="container-items">
            <img src={Mec} alt='Supermercado' />
          </div>
          <p>Supermercado</p>
        </li>
        <li>
          <div className="container-items">
            <img src={Beb} alt='Bebidas' />
          </div>
          <p>Bebidas</p>
        </li>
        <li>
          <div className="container-items">
            <img src={Fer} alt='Ferramentas' />
          </div>
          <p>Ferramentas</p>
        </li>
        <li>
          <div className="container-items">
            <img src={Sau} alt='Saúde' />
          </div>
          <p>Saúde</p>
        </li>
        <li>
          <div className="container-items">
            <img src={Esp} alt='Esporte e Fitness' />
          </div>
          <p>Esporte e Fitness</p>
        </li>
        <li>
          <div className="container-items">
            <img src={Mod} alt='Moda' />
          </div>
          <p>Moda</p>
        </li>
      </ul>
      <h1>Produtos relacionados</h1>
      <table>
        <tr>
          <th>Celuar</th>
          <th>Acessorios</th>
          <th>Tablets</th>
          <th>Notebooks</th>
          <th>TVS</th>
          <th>Ver todos</th>
        </tr>
      </table>
    </div>
  )
}

export default Items;
