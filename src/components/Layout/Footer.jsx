const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-5 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-2">Footer This Side</h2>
          <p className="text-gray-400 text-sm">
            Building modern web experiences with Tailwind CSS and React.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Quick Links</h3>
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Social Section */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">FB</a>
            <a href="#" className="hover:text-white transition-colors">IG</a>
            <a href="#" className="hover:text-white transition-colors">TW</a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-gray-500 text-sm text-center mt-6">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
