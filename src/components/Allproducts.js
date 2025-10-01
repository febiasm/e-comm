import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Allproducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/68dd566143b1c97be956ec11")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.record);
        console.log(data.record);
      });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen p-4 sm:p-6">
      <div className="mt-12 p-4 sm:p-6 max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-lg text-white">

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold mb-6 flex items-center justify-center text-center">
          Products
          <img
            src="https://cdn.pixabay.com/photo/2017/06/25/03/07/trim-2439529_1280.png"
            alt="Luxury Icon"
            className="h-10 sm:h-16 w-auto ml-4 sm:ml-6"
          />
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-600 text-left text-sm sm:text-base">
            <thead className="bg-gray-700">
              <tr>
                <th className="p-2 sm:p-3 border border-gray-600">Firm</th>
                <th className="p-2 sm:p-3 border border-gray-600">Icon</th>
                <th className="p-2 sm:p-3 border border-gray-600">Name</th>
                <th className="p-2 sm:p-3 border border-gray-600">Category</th>
                <th className="p-2 sm:p-3 border border-gray-600">Description</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id} className="bg-gray-900">
                  <td className="p-2 sm:p-3 border border-gray-600">Febias Luxury</td>
                  <td className="p-2 sm:p-3 border border-gray-600">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </td>
                  <td className="p-2 sm:p-3 border border-gray-600">{item.name}</td>
                  <td className="p-2 sm:p-3 border border-gray-600">{item.category}</td>
                  <td className="p-2 sm:p-3 border border-gray-600">
                    <ul className="list-disc pl-5">
                      <li>{item.description}</li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center">
          <Link
            to="/home"
            className="w-full sm:w-auto text-center mt-4 sm:mt-0 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
          >
            ← Back to Products
          </Link>
          <Link
            to="/checkout"
            className="w-full sm:w-auto text-center mt-4 sm:mt-0 sm:ml-6 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
          >
            Check out →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Allproducts;
