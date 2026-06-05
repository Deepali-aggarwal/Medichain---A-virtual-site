import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Doctor {
  img: string;
  name: string;
  experience: string;
  qualification: string;
  clinic: string;
  rating: number;
  stories: number;
  fee: number;
}

const initialDoctors: Doctor[] = [
  { img: '/images/b.png', name: 'Dr. sameer jain', experience: '14 years of Experience', qualification: 'MBBS, MD - Dermatology', clinic: 'Private Clinic, Hyderabad', rating: 4.6, stories: 6240, fee: 1500 },
  { img: '/images/a.png', name: 'Dr. Himanshu Mansharamani', experience: '9 years of Experience', qualification: 'MBBS, MD - Psychiatry', clinic: 'Shantikunj Clinic, Indore', rating: 4.8, stories: 5374, fee: 2000 },
  { img: '/images/c.png', name: 'Dr. Patel Nishtha Hitendrabhai', experience: '7 years of Experience', qualification: 'MBBS, MD - Dermatology', clinic: 'Kosmoderma, Bengaluru', rating: 4.5, stories: 4295, fee: 1000 },
  { img: '/images/d.png', name: 'Dr. dhairya', experience: '7 years of Experience', qualification: 'MBBS, MD - Dermatology', clinic: 'Kosmoderma, Bengaluru', rating: 4.5, stories: 4295, fee: 1500 },
];

const extraDoctors: Doctor[] = [
  { img: '/images/a.png', name: 'Dr. Rajesh Sharma', experience: '15 years of Experience', qualification: 'MBBS, MD - Cardiology', clinic: 'Apollo Hospital, Delhi', rating: 4.7, stories: 5321, fee: 1000 },
  { img: '/images/oooo.png', name: 'Dr. Sneha Kapoor', experience: '10 years of Experience', qualification: 'MBBS, MD - Gynecology', clinic: 'Fortis Hospital, Mumbai', rating: 4.8, stories: 4892, fee: 1500 },
  { img: '/images/c.png', name: 'Dr. Karan Malhotra', experience: '12 years of Experience', qualification: 'MBBS, MD - Orthopedics', clinic: 'Max Hospital, Chandigarh', rating: 4.6, stories: 5123, fee: 699 },
  { img: '/images/a.png', name: 'Dr. Ananya Verma', experience: '8 years of Experience', qualification: 'MBBS, MD - Pediatrics', clinic: 'Rainbow Hospital, Kolkata', rating: 4.9, stories: 6543, fee: 1500 },
  { img: '/images/b.png', name: 'Dr. Rohan Mehta', experience: '11 years of Experience', qualification: 'MBBS, MD - Neurology', clinic: 'Medanta, Gurgaon', rating: 4.5, stories: 4231, fee: 1000 },
  { img: '/images/d.png', name: 'Dr. Priya Singh', experience: '9 years of Experience', qualification: 'MBBS, MD - Endocrinology', clinic: 'AIIMS, Delhi', rating: 4.7, stories: 5342, fee: 1800 },
  { img: '/images/c.png', name: 'Dr. Vikram Ahuja', experience: '13 years of Experience', qualification: 'MBBS, MD - Pulmonology', clinic: 'Columbia Asia, Bangalore', rating: 4.6, stories: 4983, fee: 2000 },
];

export default function DoctorReviews() {
  const [showExtra, setShowExtra] = useState(false);
  const allDoctors = showExtra ? [...initialDoctors, ...extraDoctors] : initialDoctors;

  const bookConsultation = (name: string) => alert(`Consultation booked with ${name}`);

  return (
    <div>
      <Navbar />
      <div className="container" style={{ maxWidth: '900px', margin: 'auto', textAlign: 'center', padding: '20px' }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Popular Doctors Available</h2>
        {allDoctors.map((doc, i) => (
          <div key={i} className="doctor-card" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: 'white', padding: '20px', borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)', marginBottom: '20px',
            transition: 'transform 0.3s ease-in-out',
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img src={doc.img} alt={doc.name} style={{
              width: '90px', height: '90px', borderRadius: '50%',
              objectFit: 'cover', marginRight: '20px',
            }} />
            <div className="doctor-details" style={{ flex: 1, textAlign: 'left' }}>
              <div className="doctor-name" style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>{doc.name}</div>
              <div className="doctor-info" style={{ fontSize: '14px', color: '#666', marginTop: '5px', lineHeight: 1.5 }}>
                {doc.experience}<br />{doc.qualification}<br />{doc.clinic}
              </div>
              <div className="rating" style={{ fontSize: '14px', fontWeight: 'bold', color: '#28a745', marginTop: '5px' }}>
                ⭐ {doc.rating} • {doc.stories.toLocaleString()} Patient Stories
              </div>
            </div>
            <div>
              <div className="consult-fee" style={{ fontSize: '18px', fontWeight: 'bold', color: '#000', textAlign: 'right' }}>
                ₹ {doc.fee}/-
              </div>
              <button className="consult-button" onClick={() => bookConsultation(doc.name)} style={{
                backgroundColor: '#007bff', color: 'white', padding: '10px 20px',
                border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px',
                display: 'block', marginTop: '10px',
              }}>Consult Now</button>
            </div>
          </div>
        ))}
        {!showExtra && (
          <button id="loadMoreBtn" onClick={() => setShowExtra(true)} style={{
            backgroundColor: '#28a745', color: 'white', fontSize: '16px', fontWeight: 'bold',
            padding: '12px 24px', border: 'none', borderRadius: '6px', cursor: 'pointer',
            margin: '20px auto', display: 'block',
          }}>Load More</button>
        )}
      </div>
      <Footer />
    </div>
  );
}
