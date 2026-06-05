import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({ duration: 1000, offset: 50 });
    };
    initAOS();
  }, []);

  return (
    <div>
      <Navbar />

      <section className="home pt-5 pb-5" id="home">
        <div className="row justify-content-evenly align-middle">
          <div className="col-10 col-md-6 text-center text-md-start" data-aos="slide-right">
            <h2 style={{ color: '#3f396d' }}>
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
            <img src="/images/dd-removebg-preview.png" className="img-fluid" alt="" />
          </div>
        </div>
      </section>

      <section className="expertise mt-5" id="service">
        <div className="heading text-center">
          <small>our Expertise</small>
          <h3>Provide Wide Range of <br /> Services</h3>
        </div>
        <div className="row justify-content-evenly mt-5">
          <div className="col-10 col-md-4" data-aos="fade-up">
            <div className="service-card">
              <div className="img">
                <img src="/images/one on one.png" className="w-50 img-fluid img" alt="consult" />
              </div>
              <div className="content mt-3">
                <h4>one on one consultation</h4>
                <p className="text-muted">Dolor repellendus temporibus autem quibusdam officiis debitis rerum neces aibus minima veniam.</p>
                <a href="" className="link">Call your Doctor</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10" data-aos="fade-up">
            <div className="service-card">
              <div className="img">
                <img src="/images/appointment.png" className="w-60 img-fluid img" alt="get appointment" />
              </div>
              <div className="content mt-3">
                <h4>Online Appointments & Scheduling</h4>
                <p className="text-muted">Dolor repellendus temporibus autem quibusdam officiis debitis rerum neces aibus minima veniam.</p>
                <a href="" className="link">Book Appointment</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-10" data-aos="fade-up">
            <div className="service-card">
              <div className="img">
                <img src="/images/ambu.png" className="w-50 img-fluid img" alt="" />
              </div>
              <div className="content mt-3">
                <h4>24/7 Emergency Assistance</h4>
                <p className="text-muted">Dolor repellendus temporibus autem quibusdam officiis debitis rerum neces aibus minima veniam.</p>
                <a href="" className="link">Call Ambulance</a>
              </div>
            </div>
          </div>
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
                  <span className="text">Verified Doctor Count</span>
                </div>
              </div>
              <div className="col-10 col-md-6 mt-4 mt-md-0">
                <div className="progress-card ms-3 ms-md-0">
                  <div className="circular-progress trust">
                    <span className="progress-value javascript-progress">10,000 +</span>
                  </div>
                  <br />
                  <span className="text">Secure Patient Reviews</span>
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
                  <span className="text">Data Integrity with Blockchain</span>
                </div>
              </div>
              <div className="col-10 col-md-6 mt-4 mt-md-0">
                <div className="progress-card ms-3 ms-md-0">
                  <div className="circular-progress reactjs">
                    <span className="progress-value reactjs-progress">20,000 +</span>
                  </div>
                  <br />
                  <span className="text">Appointments Completed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 col-md-5 skill-detail" data-aos="slide-left">
            <div className="heading mt-5 mt-md-3">
              <small>About Us</small>
              <h3>Saving beautiful lifes</h3>
              <p className="text-muted">
                Our mission is simple:<br />
                ✅ Empower patients with authentic, unaltered doctor reviews.<br />
                ✅ Eliminate fake ratings and manipulated testimonials.<br />
                ✅ Help doctors build credibility based on real patient feedback.<br /><br />
                With DocTrust, you can confidently choose healthcare professionals who truly prioritize your well-being. Because when it comes to your health, trust matters most.
              </p>
              <p className="text-muted">
                integrated blockchain technology to create a secure, tamper-proof review system—ensuring that only verified patients can leave feedback about their experiences.
              </p>
              <Link to="/reviews">
                <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill" style={{ textDecoration: 'none', color: '#fff' }}>
                  Book an Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="heading text-center pt-5">
          <small>Our high rated Doctors</small>
          <h3>Choose Doctor</h3>
        </div>
        <div className="portfolio-body">
          <div className="row justify-content-evenly px-4">
            {[
              { img: '/images/a.png', name: 'Dr. Satyender singh', badge1: 'General Practitioner', badge2: '4.5⭐', badge3: '25 year experience' },
              { img: '/images/2doc.jpg', name: 'Dr. Ashutosh pandey', badge1: 'General Surgeon', badge2: '4.7⭐', badge3: '10 year exp' },
              { img: '/images/c.png', name: 'Dr. Rajeev gupta', badge1: 'Cardiologist', badge2: '4.2⭐', badge3: '30 year exp' },
            ].map((doc, i) => (
              <div key={i} className="post col-md-4 all col-10 mt-3 mt-md-0" data-aos="fade-up">
                <div className="card">
                  <img src={doc.img} className="card-img-top" alt={doc.name} />
                  <div className="card-body text-center">
                    <h4 className="card-title">{doc.name}</h4>
                    <span className="badge bg-secondary badge-pill">{doc.badge1}</span>
                    <span className="badge bg-secondary badge-pill">{doc.badge2}</span>
                    <span className="badge bg-secondary badge-pill mb-2">{doc.badge3}</span><br />
                    <a href="#" className="link">Book Consultation</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-evenly mt-4 px-4">
            {[
              { img: '/images/oooo.png', name: 'Sonalika dixit', badge1: 'Dentist', badge2: '4 ⭐', badge3: '12 year exp' },
              { img: '/images/sssss.png', name: 'Shivam mishra', badge1: 'Pediatrician', badge2: '4.8⭐', badge3: '15 years exp' },
              { img: '/images/ppppp.png', name: 'Abhay saraswat', badge1: 'Dermatologist', badge2: '4.6⭐', badge3: '35 years exp' },
            ].map((doc, i) => (
              <div key={i} className="post col-md-4 all col-10 mt-3 mt-md-0" data-aos="fade-up">
                <div className="card">
                  <img src={doc.img} className="card-img-top" alt={doc.name} />
                  <div className="card-body text-center">
                    <h4 className="card-title">{doc.name}</h4>
                    <span className="badge bg-secondary badge-pill">{doc.badge1}</span>
                    <span className="badge bg-secondary badge-pill">{doc.badge2}</span>
                    <span className="badge bg-secondary badge-pill mb-2">{doc.badge3}</span><br />
                    <a href="#" className="link">Book Consultation</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/reviews">
              <button className="c-btn h-btn mt-3 py-3 px-5 rounded-pill" style={{ width: '400px', textDecoration: 'none', color: '#fff' }}>
                Find more doctor
              </button>
            </Link>
          </div>
        </div>
      </section>
      <hr />

      <section className="testimonial mt-5 pt-5" id="testimonial">
        <div className="row justify-content-evenly">
          <div className="col-md-4 col-10" data-aos="slide-right">
            <img src="/images/qqq.avif" className="img-fluid" alt="happy Clients" />
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
                        <p className="text-muted">Medichain is revolutionary! As a first-time user, I was skeptical about online doctor consultations, but the blockchain-based reviews gave me the confidence to proceed. The doctors I found were top-rated, and the consultation was thorough and professional. I'm really glad to see a platform like this that values privacy, security, and trust in healthcare.</p>
                        <h4>Arvind arora</h4>
                        <small className="fs-6 text-muted">Heart patient</small>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row justify-content-evenly">
                      <div className="col-2 text-center"><i className="bi bi-quote"></i></div>
                      <div className="col-10">
                        <p className="text-muted">I found my doctor quickly and safely through Medichain. The blockchain review system made me trust the feedback. A fantastic experience!</p>
                        <h4>Ram prasad</h4>
                        <small className="fs-6 text-muted">cancer patient</small>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row justify-content-evenly">
                      <div className="col-2 text-center"><i className="bi bi-quote"></i></div>
                      <div className="col-10">
                        <p className="text-muted">Medichain has completely changed the way I approach healthcare! The blockchain integration guarantees that the reviews I read are authentic, so I can choose the best doctors with confidence.</p>
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
            { img: '/images/who.png', title: 'How Blockchain is Revolutionizing Healthcare', author: 'Shobhit Mishra', date: 'Mar 20,2024', text: 'This blog can discuss the role of blockchain technology in transforming healthcare, focusing on data security, patient privacy, and tamper-proof systems.' },
            { img: '/images/shakee.jpg', title: 'Top Benefits of Tamper-Proof Reviews in Healthcare', author: 'Shobhit Mishra', date: 'june 8,2024', text: 'Highlight the importance of reliable doctor reviews in the medical field.' },
            { img: '/images/yes.jpg', title: 'The Future of Doctor-Patient Relationships with Blockchain', author: 'Shobhit Mishra', date: 'july 21,2024', text: 'Explore how blockchain can enhance trust in doctor-patient interactions.' },
          ].map((post, i) => (
            <div key={i} className="blogpost col-md-4 col-10 mt-5 mt-md-0 all rounded-5">
              <div className="card">
                <img src={post.img} className="card-img-top rounded-4" alt={post.title} />
                <div className="card-body px-4">
                  <small>{post.author}</small><span className="ms-3">{post.date}</span>
                  <h4 className="card-title"><a href="#">{post.title}</a></h4>
                  <p className="text-muted">{post.text}</p>
                  <a href="#" className="read-more-btn link">Read More</a>
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
            <div className="row justify-content-evenly">
              <div className="col-1"><i className="bi bi-geo-alt-fill"></i></div>
              <div className="col-11"><p>Gurugram sec -63, NEW DELHI</p></div>
            </div>
            <div className="row justify-content-evenly">
              <div className="col-1"><i className="bi bi-telephone-fill"></i></div>
              <div className="col-11"><p>+91 9354203546</p></div>
            </div>
            <div className="row justify-content-evenly">
              <div className="col-1"><i className="bi bi-send-fill"></i></div>
              <div className="col-11"><p>Medichain.support@gmail.com</p></div>
            </div>
            <div className="row justify-content-evenly">
              <div className="col-1"><i className="bi bi-globe-americas"></i></div>
              <div className="col-11"><p>Medichain.com</p></div>
            </div>
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
