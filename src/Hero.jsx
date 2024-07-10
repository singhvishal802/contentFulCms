import HeroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illo
            possimus excepturi dolore cum laboriosam tempora delectus maiores,
            quidem doloremque, nisi atque ipsa, ab quaerat modi. Praesentium
            nihil nisi repudiandae.
          </p>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="Hero Image" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
