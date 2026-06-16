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
      AOS.init({ duration: 800, offset: 50 });
    };
    initAOS();
  }, []);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* HERO */}
      <section className="hero-section" id="home">
        <div className="hero-pattern"></div>
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <div className="hero-icon-wrap">
              <i className="bi bi-heart-pulse-fill hero-icon"></i>
            </div>
            <span className="hero-badge">Trusted by 10,000+ Patients</span>
            <h1 className="hero-title">
              Your Health <span className="hero-highlight">Comes First</span>
            </h1>
            <p className="hero-subtitle">
              Connect with verified doctors, book instant video consultations, and get AI-powered health guidance — all from the comfort of your home.
            </p>
            <div className="hero-actions">
              <Link to="/reviews">
                <button className="hero-btn-primary"><i className="bi bi-search me-2"></i>Find a Doctor</button>
              </Link>
              <Link to="/video-consult">
                <button className="hero-btn-secondary"><i className="bi bi-camera-video me-2"></i>Video Consult</button>
              </Link>
              <Link to="/ai-chat">
                <button className="hero-btn-outline"><i className="bi bi-robot me-2"></i>AI Health Chat</button>
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item"><span className="stat-num">500+</span><span className="stat-label">Verified Doctors</span></div>
              <div className="stat-divider"></div>
              <div className="stat-item"><span className="stat-num">20K+</span><span className="stat-label">Appointments Done</span></div>
              <div className="stat-divider"></div>
              <div className="stat-item"><span className="stat-num">98%</span><span className="stat-label">Patient Satisfaction</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-5" id="service">
        <div className="container">
          <div className="heading text-center mb-5" data-aos="fade-up">
            <small>Our Services</small>
            <h3>Complete Healthcare <br className="d-none d-md-block" />At Your Fingertips</h3>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { icon: 'bi-camera-video', title: 'Video Consultation', desc: 'Face-to-face video calls with top specialists. No travel, no waiting rooms.', color: '#0891b2' },
              { icon: 'bi-calendar-check', title: 'Smart Booking', desc: 'Book appointments in seconds. Choose your preferred doctor and time slot.', color: '#0d9488' },
              { icon: 'bi-robot', title: 'AI Health Assistant', desc: 'Get instant answers to your health questions powered by advanced AI.', color: '#7c3aed' },
              { icon: 'bi-shield-check', title: 'Verified Reviews', desc: 'Read genuine patient reviews to choose the right doctor with confidence.', color: '#ca8a04' },
              { icon: 'bi-truck', title: 'Emergency Support', desc: '24/7 emergency coordination with rapid ambulance dispatch.', color: '#dc2626' },
              { icon: 'bi-file-text', title: 'Digital Reports', desc: 'Access your consultation summaries and medical records anytime.', color: '#0891b2' },
            ].map((s, i) => (
              <div key={i} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="service-card">
                  <div className="service-icon" style={{ background: `${s.color}15`, color: s.color }}><i className={`bi ${s.icon}`}></i></div>
                  <h4>{s.title}</h4>
                  <p className="text-muted">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / STATS */}
      <section className="about-section py-5" id="about">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="slide-right">
              <div className="about-stats-grid">
                {[
                  { num: '500+', label: 'Doctors', color: '#0891b2' },
                  { num: '20K+', label: 'Appointments', color: '#0d9488' },
                  { num: '98%', label: 'Satisfaction', color: '#7c3aed' },
                  { num: '10K+', label: 'Happy Patients', color: '#ca8a04' },
                ].map((st, i) => (
                  <div key={i} className="about-stat-card">
                    <div className="about-stat-circle" style={{ borderColor: st.color, color: st.color }}>{st.num}</div>
                    <span>{st.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6" data-aos="slide-left">
              <div className="heading">
                <small>About Medichain</small>
                <h3>Modern Healthcare, <br />Made Simple</h3>
              </div>
              <p className="text-muted mt-3" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Medichain is a full-stack healthcare platform that connects patients with trusted doctors seamlessly. We believe quality healthcare should be accessible to everyone.
              </p>
              <div className="about-features mt-4">
                {[
                  { icon: 'bi-check-circle-fill', text: 'Verified doctors with real patient reviews' },
                  { icon: 'bi-check-circle-fill', text: 'Instant video consultations from home' },
                  { icon: 'bi-check-circle-fill', text: 'AI-powered health advice available 24/7' },
                  { icon: 'bi-check-circle-fill', text: 'Secure and private medical records' },
                ].map((f, i) => (
                  <div key={i} className="d-flex align-items-center gap-3 mb-3">
                    <i className={`bi ${f.icon}`} style={{ color: '#0d9488', fontSize: '1.2rem' }}></i>
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
              <Link to="/register">
                <button className="hero-btn-primary mt-3"><i className="bi bi-person-plus me-2"></i>Get Started Free</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="py-5" id="portfolio">
        <div className="container">
          <div className="heading text-center mb-5" data-aos="fade-up">
            <small>Our Top Doctors</small>
            <h3>Choose Your Specialist</h3>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { img: '/images/a.png', name: 'Dr. Satyender Singh', spec: 'General Physician', rating: '4.5', exp: '25 yrs', badge: 'Top Rated' },
              { img: '/images/2doc.jpg', name: 'Dr. Ashutosh Pandey', spec: 'General Surgeon', rating: '4.7', exp: '10 yrs', badge: 'Popular' },
              { img: '/images/c.png', name: 'Dr. Rajeev Gupta', spec: 'Cardiologist', rating: '4.2', exp: '30 yrs', badge: 'Senior' },
              { img: '/images/oooo.png', name: 'Dr. Sonalika Dixit', spec: 'Dentist', rating: '4.0', exp: '12 yrs', badge: 'Specialist' },
              { img: '/images/sssss.png', name: 'Dr. Shivam Mishra', spec: 'Pediatrician', rating: '4.8', exp: '15 yrs', badge: 'Top Rated' },
              { img: '/images/ppppp.png', name: 'Dr. Abhay Saraswat', spec: 'Dermatologist', rating: '4.6', exp: '35 yrs', badge: 'Senior' },
            ].map((doc, i) => (
              <div key={i} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="doctor-card">
                  <div className="doctor-card-img">
                    <img src={doc.img} alt={doc.name} />
                    <span className="doctor-badge">{doc.badge}</span>
                  </div>
                  <div className="doctor-card-body">
                    <h4>{doc.name}</h4>
                    <p className="doctor-spec">{doc.spec}</p>
                    <div className="doctor-meta">
                      <span><i className="bi bi-star-fill" style={{ color: '#f59e0b' }}></i> {doc.rating}</span>
                      <span><i className="bi bi-clock"></i> {doc.exp}</span>
                    </div>
                    <Link to="/reviews" className="doctor-book-btn">Book Consultation</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/reviews">
              <button className="hero-btn-secondary"><i className="bi bi-arrow-right me-2"></i>View All Doctors</button>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial-section py-5" id="testimonial">
        <div className="container">
          <div className="heading text-center mb-5" data-aos="fade-up">
            <small>Testimonials</small>
            <h3>What Patients Say About Us</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {[
                    { text: 'Medichain made finding a doctor so easy! The video consultation was smooth and the doctor was very thorough. Highly recommend!', name: 'Arvind Arora', role: 'Regular Patient' },
                    { text: 'I found my doctor through genuine reviews. The platform is incredibly user-friendly and the AI chat helped me understand my symptoms beforehand.', name: 'Ram Prasad', role: 'Post-surgery Follow-up' },
                    { text: 'The AI health assistant is amazing! It guided me before my consultation. The whole experience was seamless and professional.', name: 'Sonia Malhotra', role: 'Wellness Check-up' },
                  ].map((t, i) => (
                    <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                      <div className="testimonial-card text-center">
                        <i className="bi bi-quote testimonial-quote"></i>
                        <p className="testimonial-text">{t.text}</p>
                        <div className="testimonial-author">
                          <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                          <div>
                            <h5>{t.name}</h5>
                            <small>{t.role}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <button className="testimonial-btn me-2" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev"><i className="bi bi-chevron-left"></i></button>
                  <button className="testimonial-btn" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next"><i className="bi bi-chevron-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="blog-section py-5" id="blog">
        <div className="container">
          <div className="heading text-center mb-5" data-aos="fade-up">
            <small>Health Blog</small>
            <h3>Tips & Insights From Our Experts</h3>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { img: '/images/123.png', tag: 'Nutrition', title: '10 Superfoods to Boost Your Immunity Naturally', author: 'Deepali', date: 'Apr 12, 2025', desc: 'Discover the top nutrient-rich foods that strengthen your immune system and keep you healthy all year round.' },
              { img: '/images/dd.png', tag: 'Mental Health', title: '5 Minute Morning Routine for Better Mental Health', author: 'Deepali', date: 'Mar 28, 2025', desc: 'Start your day right with this simple mindfulness routine that reduces stress and boosts productivity.' },
              { img: '/images/shakee.jpg', tag: 'Fitness', title: 'Home Workouts That Actually Work for Busy People', author: 'Deepali', date: 'Mar 15, 2025', desc: 'No gym? No problem. These effective 15-minute home workouts will keep you fit and energized.' },
              { img: '/images/b.png', tag: 'Prevention', title: 'Regular Health Checkups: What You Need to Know', author: 'Deepali', date: 'Feb 20, 2025', desc: 'Learn which health screenings are essential at every age and how early detection can save lives.' },
              { img: '/images/who.png', tag: 'Wellness', title: 'The Connection Between Sleep and Heart Health', author: 'Deepali', date: 'Feb 5, 2025', desc: 'Poor sleep affects more than just your energy. Find out how quality sleep protects your heart.' },
              { img: '/images/yes.jpg', tag: 'Lifestyle', title: 'Digital Detox: Why Your Health Needs a Tech Break', author: 'Deepali', date: 'Jan 18, 2025', desc: 'Excessive screen time impacts your health. Here is how a digital detox can improve your wellbeing.' },
            ].map((post, i) => (
              <div key={i} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="blog-card">
                  <div className="blog-card-img">
                    <img src={post.img} alt={post.title} />
                    <span className="blog-tag">{post.tag}</span>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-meta"><span><i className="bi bi-person"></i> {post.author}</span><span><i className="bi bi-calendar3"></i> {post.date}</span></div>
                    <h4>{post.title}</h4>
                    <p className="text-muted">{post.desc}</p>
                    <a href="#" className="blog-read-btn">Read Article <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section py-5" id="contact">
        <div className="container">
          <div className="heading text-center mb-5" data-aos="fade-up">
            <small>Get in Touch</small>
            <h3>Have Questions? We're Here to Help</h3>
          </div>
          <div className="row justify-content-center g-5">
            <div className="col-lg-4" data-aos="slide-right">
              {[
                { icon: 'bi-geo-alt', text: 'Gurugram Sec-63, New Delhi' },
                { icon: 'bi-telephone', text: '+91 9354203546' },
                { icon: 'bi-envelope', text: 'Medichain.support@gmail.com' },
                { icon: 'bi-globe', text: 'www.medichain.com' },
              ].map((item, i) => (
                <div key={i} className="d-flex align-items-center gap-3 mb-4">
                  <div className="contact-icon"><i className={`bi ${item.icon}`}></i></div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="col-lg-6" data-aos="slide-left">
              <div className="contact-form-wrap">
                <div className="row g-3">
                  <div className="col-sm-6"><input type="text" className="form-control" placeholder="Your Name" /></div>
                  <div className="col-sm-6"><input type="email" className="form-control" placeholder="Email Address" /></div>
                  <div className="col-12"><input type="text" className="form-control" placeholder="Subject" /></div>
                  <div className="col-12"><textarea className="form-control" rows={5} placeholder="Your Message"></textarea></div>
                  <div className="col-12"><button className="hero-btn-primary w-100"><i className="bi bi-send me-2"></i>Send Message</button></div>
                </div>
              </div>
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
