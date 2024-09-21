import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link 
            to="/" 
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/add" 
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Add Product
          </Link>
        </li>
        <li>
          <Link 
            to="/update" 
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Update Product
          </Link>
        </li>
        <li>
          <Link 
            to="/delete" 
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Delete Product
          </Link>
        </li>
        <li>
          <Link 
            to="/logout" 
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Logout
          </Link>
        </li>
        <li>
          <Link 
            to="/profile" 
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link 
            to="/signup" 
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
