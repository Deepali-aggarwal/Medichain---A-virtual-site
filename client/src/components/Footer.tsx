export default function Footer() {
  return (
    <footer className="text-center text-muted py-4">
      <h3 className="text-white pt-4" data-aos="fade-up">Medichain</h3>
      <div className="link-group mt-5" data-aos="fade-up">
        <a href="#home">Home</a>
        <div className="vr"></div>
        <a href="#about">About</a>
        <div className="vr"></div>
        <a href="#service">Service</a>
        <div className="vr"></div>
        <a href="#portfolio">Medichain</a>
        <div className="vr"></div>
        <a href="#blog">Blog</a>
        <div className="vr"></div>
        <a href="#contact">Contact</a>
      </div>
      <div className="social-links mt-5" data-aos="fade-up">
        <button className="rounded-pill dribble"><i className="bi bi-dribbble"></i></button>
        <button className="rounded-pill whatsapp"><i className="bi bi-whatsapp"></i></button>
        <button className="rounded-pill behance"><i className="bi bi-behance"></i></button>
      </div>
      <hr className="text-muted my-4" />
      <p>Copyright 2022 Medichain | All Rights Reserved.</p>
    </footer>
  );
}
