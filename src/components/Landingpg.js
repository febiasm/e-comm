import image from "./img/df79b703-aa55-493d-b8e2-411d6a41d464.png"
import { Link } from "react-router-dom";

function Landingpg() {
  return (
    <div>
      <div className="relative w-full">
        <img className="coverimg w-full object-cover h-screen" src={image} alt="Landing" />
        <div className="absolute inset-0 flex flex-col items-start justify-center p-6 sm:p-8">

          <h2 className="landingtxt text-gray-50 text-3xl sm:text-5xl font-bold ml-2 sm:ml-7">
            "Crafted in Gold, Designed for You"
          </h2>


          <h2 className="brandtxt tracking-widest text-gray-900 text-xl sm:text-3xl mt-4 ml-10 sm:ml-60 font-bodoni">
            Febias Luxury
          </h2>

        <div className="flex">
          <Link
            to="/Home"
            className="mt-6 ml-10 sm:ml-52   inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold
                       bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
                       text-gray-900 shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition"
          >
            <span>Shop now</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
          <Link
            to="/Allproducts"
            className="mt-6 ml-1 sm:ml-3 inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold
                       bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
                       text-gray-900 shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition"
          >
            <span>View all products</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpg;
