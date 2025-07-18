import './location.css';

const Location = () => {
  return (
    <div className="location-wrapper">
      <h1 className="location-heading">Location & Contact Information</h1>
    <div className="location-container">
      
      <div className="map-section">
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8002643864334!2d77.19019297495355!3d28.545722688018476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6b9055fb5%3A0x81c10b266b1ea3c0!2sIndian%20Institute%20Of%20Technology%20Delhi%20(IIT%20Delhi)!5e0!3m2!1sen!2sin!4v1750874734245!5m2!1sen!2sin" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="IIT Delhi Map"
        ></iframe>
      </div>

      <div className="info-section">
        <div className="info-box">
          <h2>Email</h2>
          <p>info@iitd.ac.in</p>
        </div>
        <div className="info-box">
          <h2>Contact No.</h2>
          <p>+91 11 2659 7135</p>
        </div>
        <div className="info-box">
          <h2>Address</h2>
          <p>IIT Delhi, Hauz Khas, New Delhi, Delhi 110016</p>
        </div>
        <div className="info-box">
          <h2>Official Website</h2>
          <p><a href="https://home.iitd.ac.in" target="_blank" rel="noopener noreferrer">
    https://home.iitd.ac.in
  </a></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Location;
