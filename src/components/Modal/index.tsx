import React, { useState } from "react";
import './Modal.scss';

interface prop {
  prodName: string;
  prodIamge: string;
  prodPrice: string;
  prodDescript: string;
}

const Modal: React.FC<prop> = ({ prodName, prodDescript, prodIamge, prodPrice }) => {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);

  const moreDetails = () => {
    setShow(!show);
  }

  const countEffect = (adding: boolean) => {
    if (adding && count >= 0) {
      setCount(count + 1);
    } else if (!adding && count > 0) {
      setCount(count - 1)
    }
  }

  const moneyFormat = (valor: string) => {
    if(!/^\d+$/.test(valor)) {
      console.error("A entrada não é uma string numérica válida");
      return null;
    }
    const numero = parseInt(valor);
    const moneyFormatPars = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    return moneyFormatPars.format(numero);
  }

  return (
    <div className="modal-content">
      <div>
        <img src={prodIamge} alt={prodName} />
      </div>
      <div>
        <h1 className="title-modal">
          {prodName}
        </h1>
        <h4 className="price-modal">
          {moneyFormat(prodPrice)}
        </h4>
        <p className="description-modal">
          Many desktop publishing packages and web page editors <br /> now many desktop publishing
        </p>
        <button className="more-details" onClick={() => moreDetails()}>
          Veja mais detalhes do produto <span>{">"}</span>
        </button>
        {show && (
          <p className="description-modal">
            {prodDescript}
          </p>
        )}
        <div className="container-modal-add">
          <button
            className="button-add-modal"
            onClick={() => countEffect(false)}
          >
            -
          </button>
          <span className="number-modal-add">
            {count}
          </span>
          <button
            className="button-add-modal"
            onClick={() => countEffect(true)}
          >
            +
          </button>
        </div>
        <button className="button-buy-modal">
          comprar
        </button>
      </div>
    </div>
  )
}

export default Modal;
