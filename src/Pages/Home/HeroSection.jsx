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
          <p className="hero--section-description1">
            A Front-End Developer specializing in building responsive,
            user-friendly web applications using modern technologies like React,
            HTML, CSS, and JavaScript.
          </p>
        </div>{" "}
        <a
          href="https://wa.me/916300275894?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
          target="_blank"
          className="btn btn-primary mt-4"
        >
          Get In Touch{" "}
        </a>
        <a
          href="/img/sivanandha_resume_2025.pdf"
          className="btn btn-outline-primary ms-4 px-5 mt-4"
          download="sivanandha_resume_2025.pdf"
        >
          Resume
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
