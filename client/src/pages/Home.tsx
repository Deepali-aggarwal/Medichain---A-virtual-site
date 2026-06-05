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

      <section className="hero-section" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-content" data-aos="fade-up">
          <span className="hero-badge">Trusted by 10,000+ Patients</span>
          <h1 className="hero-title">
            Your Health, <span className="hero-highlight">Our Mission</span>
          </h1>
          <p className="hero-subtitle">
            Connect with top doctors, book video consultations, and get AI-powered health advice — all from one platform.
          </p>
          <div className="hero-actions">
            <Link to="/reviews">
              <button className="hero-btn-primary">Find a Doctor</button>
            </Link>
            <Link to="/video-consult">
              <button className="hero-btn-secondary">Video Consult</button>
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item"><span className="stat-num">500+</span><span className="stat-label">Doctors</span></div>
            <div className="stat-divider"></div>
            <div className="stat-item"><span className="stat-num">20K+</span><span className="stat-label">Appointments</span></div>
            <div className="stat-divider"></div>
            <div className="stat-item"><span className="stat-num">98%</span><span className="stat-label">Satisfaction</span></div>
          </div>
        </div>
      </section>

      <section className="expertise mt-5" id="service">
        <div className="heading text-center">
          <small>Our Services</small>
          <h3>Comprehensive Healthcare <br />Solutions</h3>
        </div>
        <div className="row justify-content-evenly mt-5">
          {[
            { img: '/images/one on one.png', title: 'Video Consultation', desc: 'Connect with verified doctors face-to-face through secure video calls from anywhere.', link: '/video-consult', label: 'Consult Now' },
            { img: '/images/appointment.png', title: 'Smart Appointment Booking', desc: 'Book appointments with top specialists at your preferred time in just a few clicks.', link: '/reviews', label: 'Book Now' },
            { img: '/images/ambu.png', title: 'Emergency Support', desc: '24/7 emergency assistance with rapid response and ambulance coordination when you need it.', link: '#contact', label: 'Get Help' },
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
                  <span className="text">Happy Patients</span>
                </div>
              </div>
            </div>
            <div className="row justify-content-evenly mt-4">
              <div className="col-10 col-md-6">
                <div className="progress-card ms-3 ms-md-0">
                  <div className="circular-progress php">
                    <span className="progress-value php-progress">98%</span>
                  </div>
                  <br />
                  <span className="text">Satisfaction Rate</span>
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
              <h3>Modern Healthcare Platform</h3>
              <p className="text-muted">
                Medichain is a full-stack healthcare platform designed to connect patients with trusted doctors seamlessly. 
                Our mission is simple:
              </p>
              <p className="text-muted">
                ✅ Browse verified doctors with real patient reviews.<br />
                ✅ Book video consultations instantly.<br />
                ✅ Get AI-powered health advice anytime.<br />
                ✅ Manage all your healthcare needs in one place.<br />
              </p>
              <p className="text-muted">
                We believe healthcare should be accessible, transparent, and driven by technology. 
                From secure authentication to real-time video calls and smart AI chat — Medichain brings modern medicine to your fingertips.
              </p>
              <Link to="/reviews">
                <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill" style={{ color: '#fff' }}>
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="heading text-center pt-5">
          <small>Our Top Doctors</small>
          <h3>Choose Your Specialist</h3>
        </div>
        <div className="portfolio-body">
          <div className="row justify-content-evenly px-4">
            {[
              { img: '/images/a.png', name: 'Dr. Satyender Singh', badge1: 'General Physician', badge2: '4.5⭐', badge3: '25 yrs exp' },
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
                Browse All Doctors
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
              <h3>What Our Patients Say</h3>
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row justify-content-evenly">
                      <div className="col-2 text-center"><i className="bi bi-quote"></i></div>
                      <div className="col-10">
                        <p className="text-muted">Medichain made finding a doctor so easy! Video consultation saved me a trip to the clinic. The AI chat helped me understand my symptoms beforehand.</p>
                        <h4>Arvind Arora</h4>
                        <small className="fs-6 text-muted">Regular patient</small>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row justify-content-evenly">
                      <div className="col-2 text-center"><i className="bi bi-quote"></i></div>
                      <div className="col-10">
                        <p className="text-muted">I found my doctor quickly through genuine patient reviews. The video call quality was excellent and the doctor was very thorough.</p>
                        <h4>Ram Prasad</h4>
                        <small className="fs-6 text-muted">Post-surgery follow-up</small>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row justify-content-evenly">
                      <div className="col-2 text-center"><i className="bi bi-quote"></i></div>
                      <div className="col-10">
                        <p className="text-muted">The AI health assistant is amazing! It helped me figure out what was wrong before I even booked an appointment. Highly recommend this platform.</p>
                        <h4>Sonia Malhotra</h4>
                        <small className="fs-6 text-muted">Wellness check-up</small>
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
          <small>Latest Articles</small>
          <h3>Health Tips & Insights</h3>
        </div>
        <div className="row justify-content-evenly px-4 mt-4" data-aos="fade-up">
          {[
            { img: '/images/123.png', title: 'Telemedicine: The Future of Healthcare', author: 'Deepali', date: 'Jan 15, 2025', text: 'Explore how telemedicine is transforming healthcare delivery, making it more accessible and convenient for patients worldwide.' },
            { img: '/images/dd.png', title: '5 Tips for Choosing the Right Doctor', author: 'Deepali', date: 'Feb 22, 2025', text: 'Finding the right doctor can be overwhelming. Here are 5 practical tips to help you make an informed decision for your health.' },
            { img: '/images/shakee.jpg', title: 'Benefits of Online Video Consultations', author: 'Deepali', date: 'Mar 8, 2025', text: 'Video consultations save time, reduce exposure to illnesses, and make specialist care accessible from the comfort of your home.' },
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
          <h3>Have Questions? Contact Us</h3>
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
              <div className="mb-3"><input type="text" className="form-control" placeholder="Your Name" /></div>
              <div className="mb-3"><input type="email" className="form-control" placeholder="Email Address" /></div>
              <div className="mb-3"><input type="text" className="form-control" placeholder="Phone Number" /></div>
              <div className="mb-3"><textarea className="form-control" placeholder="Your Message" rows={5}></textarea></div>
              <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill">Send Message</button>
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
