import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Footer Left Section */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-lg font-semibold">Company Name</h3>
          <p className="text-sm">© 2024 All rights reserved.</p>
        </div>

        {/* Footer Center Section (Social Links) */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* Footer Right Section (Useful Links) */}
        <div className="text-center md:text-right">
          <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
