import { Link } from "react-router-dom";
function Checkout() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-3xl mx-auto p-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Kindly fill registration form before checkout
          </h1>


          <div className="mb-6">

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="address"
                className="block text-gray-700 dark:text-white mb-1"
              >
                Email Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="city"
                className="block text-gray-700 dark:text-white mb-1"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>


          </div>


          <div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
              Payment Information
            </h2>
            <div className="mt-4">
              <label
                htmlFor="card_number"
                className="block text-gray-700 dark:text-white mb-1"
              >
                Card Number
              </label>
              <input
                type="text"
                id="card_number"
                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor="exp_date"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="exp_date"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
           <Link to ="/Home" ><button className="ml-6 inline-block mt-6 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
              Place Order
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
