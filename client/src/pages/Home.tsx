import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({ duration: 1000, offset: 50 });
    };
    initAOS();
  }, []);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="home pt-5 pb-5" id="home">
        <div className="row justify-content-evenly align-middle">
          <div className="col-10 col-md-6 text-center text-md-start" data-aos="slide-right">
            <h2 style={{ color: 'var(--heading)' }}>
              At Medichain you get <br /><span className="c-orange">Trusted Doctors</span>
            </h2>
            <p className="text-muted">
              Blockchain-powered doctor reviews to ensure transparency and trust.
              Choose the right doctor based on real patient experiences.
            </p>
            <Link to="/reviews">
              <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">Find a Doctor</button>
            </Link>
          </div>
          <div className="col-10 col-md-4 d-none d-md-block">
            <img src="/images/doc.png" className="img-fluid" alt="" />
          </div>
        </div>
      </section>

      <section className="expertise mt-5" id="service">
        <div className="heading text-center">
          <small>our Expertise</small>
          <h3>Provide Wide Range of <br /> Services</h3>
        </div>
        <div className="row justify-content-evenly mt-5">
          {[
            { img: '/images/one on one.png', title: 'One on One Consultation', desc: 'Get personalized video consultations with verified doctors from the comfort of your home.', link: '/video-consult', label: 'Consult Now' },
            { img: '/images/appointment.png', title: 'Online Appointments & Scheduling', desc: 'Book appointments with top doctors at your preferred time slot instantly.', link: '/reviews', label: 'Book Now' },
            { img: '/images/ambu.png', title: '24/7 Emergency Assistance', desc: 'Round-the-clock emergency support with rapid response and ambulance coordination.', link: '#contact', label: 'Call Ambulance' },
          ].map((s, i) => (
            <div key={i} className="col-10 col-md-4" data-aos="fade-up">
              <div className="service-card">
                <img src={s.img} className="w-50 img-fluid" alt={s.title} />
                <div className="content mt-3">
                  <h4>{s.title}</h4>
                  <p className="text-muted">{s.desc}</p>
                  <Link to={s.link} className="link">{s.label}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="skill mt-5 py-5" id="about">
        <div className="row justify-content-evenly">
          <div className="col-10 col-md-5 skill-with-progress" data-aos="slide-right">
            <div className="row justify-content-evenly">
              <div className="col-10 col-md-6">
                <div className="progress-card ms-3 ms-md-0">
                  <div className="circular-progress html-css">
                    <span className="progress-value html-progress">500+</span>
                  </div>
                  <br />
                  <span className="text">Verified Doctors</span>
                </div>
              </div>
              <div className="col-10 col-md-6 mt-4 mt-md-0">
                <div className="progress-card ms-3 ms-md-0">
                  <div className="circular-progress trust">
                    <span className="progress-value javascript-progress">10K+</span>
                  </div>
                  <br />
                  <span className="text">Secure Reviews</span>
                </div>
              </div>
            </div>
            <div className="row justify-content-evenly mt-4">
              <div className="col-10 col-md-6">
                <div className="progress-card ms-3 ms-md-0">
                  <div className="circular-progress php">
                    <span className="progress-value php-progress">100%</span>
                  </div>
                  <br />
                  <span className="text">Blockchain Integrity</span>
                </div>
              </div>
              <div className="col-10 col-md-6 mt-4 mt-md-0">
                <div className="progress-card ms-3 ms-md-0">
                  <div className="circular-progress reactjs">
                    <span className="progress-value reactjs-progress">20K+</span>
                  </div>
                  <br />
                  <span className="text">Appointments Done</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 col-md-5 skill-detail" data-aos="slide-left">
            <div className="heading mt-5 mt-md-3">
              <small>About Us</small>
              <h3>Saving Beautiful Lives</h3>
              <p className="text-muted">
                Our mission is simple:<br />
                ✅ Empower patients with authentic, unaltered doctor reviews.<br />
                ✅ Eliminate fake ratings and manipulated testimonials.<br />
                ✅ Help doctors build credibility based on real patient feedback.<br /><br />
                With Medichain, you can confidently choose healthcare professionals who truly prioritize your well-being. Because when it comes to your health, trust matters most.
              </p>
              <p className="text-muted">
                We've integrated blockchain technology to create a secure, tamper-proof review system — ensuring that only verified patients can leave feedback about their experiences.
              </p>
              <Link to="/reviews">
                <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill" style={{ color: '#fff' }}>
                  Book an Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="heading text-center pt-5">
          <small>Our High Rated Doctors</small>
          <h3>Choose Your Doctor</h3>
        </div>
        <div className="portfolio-body">
          <div className="row justify-content-evenly px-4">
            {[
              { img: '/images/a.png', name: 'Dr. Satyender Singh', badge1: 'General Practitioner', badge2: '4.5⭐', badge3: '25 yrs exp' },
              { img: '/images/2doc.jpg', name: 'Dr. Ashutosh Pandey', badge1: 'General Surgeon', badge2: '4.7⭐', badge3: '10 yrs exp' },
              { img: '/images/c.png', name: 'Dr. Rajeev Gupta', badge1: 'Cardiologist', badge2: '4.2⭐', badge3: '30 yrs exp' },
            ].map((doc, i) => (
              <div key={i} className="post col-md-4 col-10 mt-3 mt-md-0" data-aos="fade-up">
                <div className="card">
                  <img src={doc.img} className="card-img-top" alt={doc.name} />
                  <div className="card-body text-center">
                    <h4 className="card-title">{doc.name}</h4>
                    <span className="badge bg-secondary me-1">{doc.badge1}</span>
                    <span className="badge bg-warning text-dark me-1">{doc.badge2}</span>
                    <span className="badge bg-info text-dark">{doc.badge3}</span>
                    <div className="mt-3"><Link to="/reviews" className="link">Book Consultation</Link></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-evenly mt-4 px-4">
            {[
              { img: '/images/oooo.png', name: 'Dr. Sonalika Dixit', badge1: 'Dentist', badge2: '4.0⭐', badge3: '12 yrs exp' },
              { img: '/images/sssss.png', name: 'Dr. Shivam Mishra', badge1: 'Pediatrician', badge2: '4.8⭐', badge3: '15 yrs exp' },
              { img: '/images/ppppp.png', name: 'Dr. Abhay Saraswat', badge1: 'Dermatologist', badge2: '4.6⭐', badge3: '35 yrs exp' },
            ].map((doc, i) => (
              <div key={i} className="post col-md-4 col-10 mt-3 mt-md-0" data-aos="fade-up">
                <div className="card">
                  <img src={doc.img} className="card-img-top" alt={doc.name} />
                  <div className="card-body text-center">
                    <h4 className="card-title">{doc.name}</h4>
                    <span className="badge bg-secondary me-1">{doc.badge1}</span>
                    <span className="badge bg-warning text-dark me-1">{doc.badge2}</span>
                    <span className="badge bg-info text-dark">{doc.badge3}</span>
                    <div className="mt-3"><Link to="/reviews" className="link">Book Consultation</Link></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/reviews">
              <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill" style={{ width: 'min(400px, 90%)', color: '#fff' }}>
                Find More Doctors
              </button>
            </Link>
          </div>
        </div>
      </section>
      <hr />

      <section className="testimonial mt-5 pt-5" id="testimonial">
        <div className="row justify-content-evenly">
          <div className="col-md-4 col-10" data-aos="slide-right">
            <img src="/images/qqq.avif" className="img-fluid rounded-4 shadow" alt="happy clients" />
          </div>
          <div className="col-md-6 col-10 mt-5" data-aos="slide-left">
            <div className="heading">
              <small>Testimonials</small>
              <h3>Happy Clients Feedback</h3>
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row justify-content-evenly">
                      <div className="col-2 text-center"><i className="bi bi-quote"></i></div>
                      <div className="col-10">
                        <p className="text-muted">Medichain is revolutionary! The blockchain-based reviews gave me confidence to choose the right doctor. The consultation was thorough and professional.</p>
                        <h4>Arvind Arora</h4>
                        <small className="fs-6 text-muted">Heart patient</small>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row justify-content-evenly">
                      <div className="col-2 text-center"><i className="bi bi-quote"></i></div>
                      <div className="col-10">
                        <p className="text-muted">I found my doctor quickly and safely. The blockchain review system made me trust the feedback completely. A fantastic experience!</p>
                        <h4>Ram Prasad</h4>
                        <small className="fs-6 text-muted">Cancer patient</small>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row justify-content-evenly">
                      <div className="col-2 text-center"><i className="bi bi-quote"></i></div>
                      <div className="col-10">
                        <p className="text-muted">Medichain has completely changed how I approach healthcare! The blockchain integration guarantees authentic reviews so I can choose doctors with confidence.</p>
                        <h4>Sonia Malhotra</h4>
                        <small className="fs-6 text-muted">Anemia patient</small>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="nextprev-btn rounded-pill prev-btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <i className="bi bi-arrow-left-circle-fill prev"></i>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="nextprev-btn rounded-pill next-btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <i className="bi bi-arrow-right-circle-fill next"></i>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog mt-5 pb-5" id="blog">
        <div className="heading text-center pt-5">
          <small>Latest News</small>
          <h3>Blog & Articles</h3>
        </div>
        <div className="row justify-content-evenly px-4 mt-4" data-aos="fade-up">
          {[
            { img: '/images/123.png', title: 'Telemedicine: The Future of Healthcare', author: 'Deepali', date: 'Jan 15, 2025', text: 'Explore how telemedicine is transforming healthcare delivery, making it more accessible and convenient for patients worldwide.' },
            { img: '/images/dd.png', title: '5 Tips for Choosing the Right Doctor', author: 'Deepali', date: 'Feb 22, 2025', text: 'Finding the right doctor can be overwhelming. Here are 5 practical tips to help you make an informed decision for your health.' },
            { img: '/images/b.png', title: 'How Blockchain Ensures Data Security', author: 'Deepali', date: 'Mar 8, 2025', text: 'Learn how blockchain technology creates an immutable record of patient reviews, ensuring complete transparency and trust.' },
          ].map((post, i) => (
            <div key={i} className="blogpost col-md-4 col-10 mt-5 mt-md-0 rounded-5">
              <div className="card h-100">
                <img src={post.img} className="card-img-top rounded-4" alt={post.title} />
                <div className="card-body px-4 d-flex flex-column">
                  <div className="mb-2">
                    <small className="fw-bold">{post.author}</small><span className="ms-3 text-muted">{post.date}</span>
                  </div>
                  <h4 className="card-title">{post.title}</h4>
                  <p className="text-muted flex-grow-1">{post.text}</p>
                  <a href="#" className="read-more-btn link mt-auto">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact py-5" id="contact">
        <div className="heading text-center">
          <small>Get in Touch</small>
          <h3>Any Questions? Feel Free to Contact</h3>
        </div>
        <div className="row justify-content-evenly mt-5">
          <div className="col-md-5 col-10 contact-details" data-aos="slide-right">
            {[
              { icon: 'bi-geo-alt-fill', text: 'Gurugram Sec-63, New Delhi' },
              { icon: 'bi-telephone-fill', text: '+91 9354203546' },
              { icon: 'bi-send-fill', text: 'Medichain.support@gmail.com' },
              { icon: 'bi-globe-americas', text: 'Medichain.com' },
            ].map((item, i) => (
              <div key={i} className="row justify-content-evenly mb-3">
                <div className="col-1"><i className={`bi ${item.icon}`}></i></div>
                <div className="col-11"><p className="mb-0">{item.text}</p></div>
              </div>
            ))}
          </div>
          <div className="col-md-5 col-10 mt-3 mt-md-0" data-aos="slide-left">
            <div className="contact-form">
              <div className="mb-3"><input type="text" className="form-control" placeholder="Name" /></div>
              <div className="mb-3"><input type="email" className="form-control" placeholder="E-mail" /></div>
              <div className="mb-3"><input type="text" className="form-control" placeholder="Mobile No." /></div>
              <div className="mb-3"><textarea className="form-control" placeholder="Message" rows={5}></textarea></div>
              <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">Submit</button>
            </div>
          </div>
        </div>
      </section>

      <button type="button" className="btn btn-floating btn-lg rounded-pill" id="btn-back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="bi bi-arrow-up"></i>
      </button>

      <Footer />
    </div>
  );
}
