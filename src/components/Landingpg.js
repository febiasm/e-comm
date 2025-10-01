import image from "./img/df79b703-aa55-493d-b8e2-411d6a41d464.png"
import { Link } from "react-router-dom";

function Landingpg() {

  return(
   <div>

<div class="relative   w-full">
    <img class="coverimg w-full -cover " src={image}/>

   <div class="absolute inset-0 flex flex-col items-start justify-center p-8">
  <h2 class="landingtxt text-gray-50 text-5xl ml-7 font-bold">
    "Crafted in Gold, Designed for You"
  </h2>
  <h2 class="brandtxt tracking-widest text-gray-900 text-3xl ml-60 mt-4 font-bodoni">
    Febias Luxury
  </h2>


  <Link to="/Home"
     class="ml-64 mt-6 inline-flex items-center px-6 py-3 rounded-lg font-semibold
            bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
            text-gray-900 shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition">
    <span>Shop now</span>
    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" stroke-linecap="round"
         stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
      <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
  </Link>
</div>


</div>

    </div>
  )

}

export default Landingpg;
