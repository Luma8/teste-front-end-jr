// import bannerDegrader from '../../assets/BannerImg/background_degrader.png';
import banner from '../../assets/BannerImg/background.png';
import './banner.scss';

const Banner = () => {
  return (
    <div>
      <div className='banner-info'>
        <h1>
          Venha conhecer nossas 
          <br />
          promoções
        </h1>
        <p>50% Off nos produtos </p>
        <button>
          Ver produto
        </button>
      </div>
      <div className="banner-degrader" />
      <img className='banner' src={banner} />
    </div>
  )
}

export default Banner;