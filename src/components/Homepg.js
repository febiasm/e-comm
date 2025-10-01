import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Homepg() {
    const [product, setproduct] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/68dd566143b1c97be956ec11")
      .then((res) => res.json())
      .then((data) => {
        setproduct(data.record);
        console.log(data.record);
      })
  }, []);

  return <div className="grid grid-cols-1 bg-gray-800 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {product.map((item) =>(


 <Link
          to={`/product/${item.id}`} className="bg-gray-600  w-72 rounded-xl mt-7 ml-12">
    <div className="">
        <img src={item.image}></img>
    </div>
    <div className="ml-3">
        <h3 className="text-yellow-500 text-sm mb-1">{item.category}</h3>
        <h3 className="text-white font-bold mb-4">{item.name}</h3>
        <h3 className="text-white mb-4 font-bold"> Ksh {item.price}</h3>
    </div>
    </Link>


    ))}

     </div>;
}
export default Homepg;
