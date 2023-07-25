import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="px-4 sm:px-10 py-4">
        <div className="flex items-center justify-between">
          <Link className="text-2xl font-bold text-yellow-400 hover:text-white" href="/">
            ADiouane <span className="text-sm text-white hover:text-orange-500">TVmovies App</span>
          </Link>
          <div className="hidden sm:flex space-x-10">
            <Link className="text-xl font-bold text-yellow-400 hover:text-white" href="/movies">
              Top Movies
            </Link>
            <Link className="text-xl font-bold text-yellow-400 hover:text-white" href="/tvshow">
              Top Tv Show
            </Link>
            {/* <Link className="text-xl font-bold text-yellow-400 hover:text-white" href="/dashboard">
              Dashboard
            </Link> */}
            <Link className="text-xl font-bold text-yellow-400 hover:text-white" href="/about">
              About
            </Link>
            <Link className="text-xl font-bold text-yellow-400 hover:text-white" href="/contact">
              Contact
            </Link>
          </div>
          {/* Mobile Menu (hamburger menu) */}
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className="text-yellow-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu (shown on small screens) */}
        <div className="sm:hidden mt-2 border-t border-yellow-400">
          <Link className="block py-2 text-xl font-bold text-yellow-400 hover:text-white" href="/movies">
            Top Movies
          </Link>
          <Link className="block py-2 text-xl font-bold text-yellow-400 hover:text-white" href="/tvshow">
            Top Tv Show
          </Link>
          <Link className="block py-2 text-xl font-bold text-yellow-400 hover:text-white" href="/dashboard">
            Dashboard
          </Link>
          <Link className="block py-2 text-xl font-bold text-yellow-400 hover:text-white" href="/about">
            About
          </Link>
          <Link className="block py-2 text-xl font-bold text-yellow-400 hover:text-white" href="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
