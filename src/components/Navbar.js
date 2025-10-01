import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-gray-900 h-14 px-6">
      <div className="flex items-center justify-between h-full">

        <ul className="flex text-gray-50 space-x-6">
          <li><Link to ="/"className="hover:text-yellow-400">Home</Link></li>
          <li><a href="#" className="hover:text-yellow-400">News</a></li>
          <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          <li><a href="#" className="hover:text-yellow-400">About</a></li>
        </ul>


        <img
          src="https://cdn.pixabay.com/photo/2017/06/25/03/07/trim-2439529_1280.png"
          alt="Luxury Icon"
          className="h-16 w-auto"
        />
      </div>
    </nav>
  );
}

export default Navbar;
