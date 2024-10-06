import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  useEffect(() => {
    // Create link element for the Montserrat Thin 100 font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Cleanup function to remove the font when component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div id="contact" className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-10 relative">
        Contact Us
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-[220px] h-5 bg-green-400 bg-opacity-45 rounded-full"></span>
      </h2>

      {/* Contact Info Section */}
      <div className="flex flex-col md:flex-row justify-center items-start text-base font-medium gap-10">
        <div className="col-12 col-md-10 col-lg-5 text-center md:text-left text-gray-800">
          <h3 className="text-2xl mb-4">Susankya Global</h3>

          {/* Address Section */}
          <div className="section-spacing">
            <div className="grid grid-cols-[30px_auto] gap-x-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-500 mt-1" />
              <div className="space-y-2 text-left">
                <p className="text-base">Des Moines, Iowa, United States</p>
                <p className="text-base">Kupondole, Lalitpur, Nepal (Opp. to Hotel Himalaya)</p>
                <p className="text-base">Ekta Vihar, New Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Phone Section */}
          <div className="section-spacing">
            <div className="grid grid-cols-[30px_auto] gap-x-4">
              <FontAwesomeIcon icon={faMobileAlt} className="text-green-500 mt-1" />
              <div className="space-y-2 text-left">
                <p className="text-base">Admin & Sales: +977 9803264626</p>
                <p className="text-base">Support: +977 981-2594679</p>
                <p className="text-base">Renew & Support: +977 982-3364762</p>
                <p className="text-base">Training: +977 970-4532991</p>
                <p className="text-base">Global Sales: +977 982-2768260 & +977 9708050651</p>
              </div>
            </div>
          </div>

          {/* Bangladesh Office */}
          <div className="section-spacing">
            <div className="grid grid-cols-[30px_auto] gap-x-4">
              <img src='/bd.png' alt="Bangladesh Flag" className="w-6 h-6" />
              <div className="space-y-2 text-left">
                <p className="text-base">Sales & Support: +880 1838-602973</p>
              </div>
            </div>
          </div>

          {/* Office & Email Section */}
          <div className="section-spacing">
            <div className="grid grid-cols-[30px_auto] gap-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-green-500 mt-1" />
              <div className="space-y-2 text-left">
                <p className="text-base">Office: 01-5010558</p>
              </div>
            </div>
          </div>

          <div className="section-spacing">
            <div className="grid grid-cols-[30px_auto] gap-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-green-500 mt-1" />
              <div className="space-y-2 text-left">
                <p className="text-base"><a href="mailto:info@susankya.com" className="text-blue-600">info@susankya.com</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="col-12 col-md-10 col-lg-5 map-container">
          <iframe
            title="Susankya Global Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3367201766355!2d85.31420121453517!3d27.685961232935327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19077a5fa1f7%3A0x8910709cf72b84e6!2sSusankya%20Global!5e0!3m2!1sen!2snp!4v1694890820904!5m2!1sen!2snp"
            width="85%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full my-8 border-t border-gray-300"></div>

      {/* Subscribe Section */}
      <div className="bg-white py-12 px-4 md:px-8 lg:px-16 text-center">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-10 relative">
          Subscribe To CMST
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-[400px] h-5 bg-green-400 bg-opacity-45 rounded-full"></span>
        </h2>

        {/* Register Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full">
          Register
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
