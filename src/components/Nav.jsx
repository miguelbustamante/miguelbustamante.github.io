import { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 py-4">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-lg font-semibold">Home</a>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-2xl">☰</span>
        </button>
        <ul className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
          <li><a href="#about" className="block py-2 hover:text-blue-600">About</a></li>
          <li><a href="#publications" className="block py-2 hover:text-blue-600">Publications</a></li>
          <li><a href="#contact" className="block py-2 hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;