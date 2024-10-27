import Link from "next/link";

const Navbar  = () => {
  return (
    <nav className="bg-gray-800 text-white w-full py-3 top-0 z-50 shadow-md">
      <div className="flex justify-between mx-3">
        <div className="text-lg font-bold">First Application</div>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
