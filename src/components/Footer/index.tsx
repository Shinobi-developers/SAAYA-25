import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Saaya College Art Fest brings together artists and performers from
              various fields to showcase their talent and creativity in a vibrant
              and energetic atmosphere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-500">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-500">About</a>
              </li>
              <li>
                <a href="/events" className="hover:text-blue-500">Events</a>
              </li>
              <li>
                <a href="/results" className="hover:text-blue-500">Results</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400 mb-4">Email: 	info@awhengg.org</p>
            <p className="text-gray-400">Phone: 0495 2358747</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/saaya_25_?igsh=bXJra291OGV3cWli" className="text-gray-400 hover:text-pink-500">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-700">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Google Map Location */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-center text-white mb-4">Find Us</h3>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <iframe
              title="Google Map Location"
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0153110184947!2d75.87208197504893!3d11.260283688919408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b53b70fed51%3A0x56083717be9c111a!2sAWH%20Engineering%20College!5e0!3m2!1sen!2sin!4v1738304106079!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>&copy; Saaya'25 designed & developed by Team Shinobi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
