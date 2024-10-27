import Reacfootert from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full bottom-0 z-50">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}  All rights reserved.
        </p>
      </div>
    </footer>
  );
};


export default Footer ;