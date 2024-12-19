export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Shiva</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front-End</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            A Front-End Developer specializing in building responsive,
            user-friendly web applications using modern technologies like React,
            HTML, CSS, and JavaScript.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
