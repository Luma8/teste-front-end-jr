
import './Caroulse.scss';
import { useRef, useState } from 'react';
import Cards from '../cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/parallax';
import Back from '../../assets/CaroulelImg/Vector (1).svg';
import Next from '../../assets/CaroulelImg/Vector.svg';
import product from '../../mockup/prodcuts.json';

const CarouselReact = () => {
  const swiperRef = useRef();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selecteProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product: any) => {
    setSelectedProduct(product);
    setModalOpen(true);
  }
  const handleCloseModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  return (
    <div className='container margin-carousel container-carousel'>
      {modalOpen && selecteProduct && (
        <div>
          <button onClick={() => handleCloseModal}>xau</button>
        </div>
      )}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <button className='swiper-button' onClick={() => swiperRef.current.slidePrev()}>
        <img src={Back} />
      </button>
      <Swiper
        slidesPerView={3}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        onSwiper={(swiper) => swiperRef.current = swiper}
      >
        <div className='swiper-content'>
          {product.products.map((prod, key) => {
            return (
              <SwiperSlide key={key}>
                <Cards title={prod.productName} price={prod.price.toString()} image={prod.photo} onOpenModal={handleOpenModal} product={prod} />
              </SwiperSlide>
            )
          })}
        </div>
      </Swiper>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <button className='swiper-button' onClick={() => swiperRef.current.slideNext()}>
        <img src={Next} />
      </button>
    </div>
  )
}

export default CarouselReact
