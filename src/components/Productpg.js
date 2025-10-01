import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function ProductPg() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/68dd566143b1c97be956ec11")
      .then((res) => res.json())
      .then((data) => {
        const found = data.record.find((item) => item.id === parseInt(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p className="text-white p-6">Loading...</p>;

  return (

     <div className="mt-12 p-6 max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-lg text-white">
      <h1 className="text-2xl flex font-bold mb-6 text-center"> Product <img
          src="https://cdn.pixabay.com/photo/2017/06/25/03/07/trim-2439529_1280.png"
          alt="Luxury Icon"
          className="h-16 ml-72 w-auto"
        /></h1>

      <table className="w-full border border-gray-600 text-left">
        <thead className="bg-gray-700">
          <tr>
            <th className="p-3 border border-gray-600">E-commerce Firm</th>
            <th className="p-3 border border-gray-600">Icon</th>
            <th className="p-3 border border-gray-600">Name</th>
            <th className="p-3 border border-gray-600">Category</th>
            <th className="p-3 border border-gray-600">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-900">
            <td className="p-3 border border-gray-600">Febias Luxury</td>
            <td className="p-3 border border-gray-600">
              <img
                src={product.image}
                alt="Firm Icon"
                className="w-10 h-10"
              />
            </td>
            <td className="p-3 border border-gray-600">{product.name}</td>
            <td className="p-3 border border-gray-600">{product.category}</td>
            <td className="p-3 border border-gray-600">
              <ul className="list-disc pl-5">
                <li>{product.description}</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mt-6 text-center">
        <Link
          to="/home"
          className="inline-block mt-6 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
        >
          ← Back to Products
        </Link>
        <Link
          to="/checkout"
          className="ml-6 inline-block mt-6 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
        >
          Check out →
        </Link>
      </div>
      </div>

  );
}

export default ProductPg;
