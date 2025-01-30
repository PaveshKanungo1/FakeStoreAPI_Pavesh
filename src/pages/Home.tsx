import { FaCloudDownloadAlt, FaPlusCircle, FaTrash } from "react-icons/fa";

const Home = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4c2c2] to-[#a8c0ff] text-gray-900">
      {/* Hero Section */}
      <header className="bg-[#2c3e50] text-white py-20 px-4 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Fake Store API
        </h1>
        <p className="mt-3 text-lg md:text-xl text-gray-300">
          Created by{" "}
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text transition-all duration-300 hover:scale-105 hover:drop-shadow-lg">
            Pavesh Kanungo
          </span>
        </p>
      </header>

      {/* Content Section */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* About Section */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#333]">
            What is Fake Store API?
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Fake Store API provides Get, Post, and Delete operations to manage
            products dynamically.
          </p>
        </section>

        {/* API Endpoints Section */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
            API Endpoints
          </h2>

          {/* API Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* GET API Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#6a11cb] flex items-start space-x-4">
              <FaCloudDownloadAlt className="text-[#6a11cb] text-4xl" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  GET: All Products
                </h3>
                <p className="text-gray-600 mt-2">
                  Fetch all products from the store dynamically.
                </p>
                <code className="block mt-3 text-[#6a11cb] font-mono bg-gray-100 px-3 py-1 rounded-md">
                  GET /api/products
                </code>
              </div>
            </div>

            {/* POST API Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#ff914d] flex items-start space-x-4">
              <FaPlusCircle className="text-[#ff914d] text-4xl" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  POST: Add Product
                </h3>
                <p className="text-gray-600 mt-2">
                  Add a new product by sending details in the request body.
                </p>
                <code className="block mt-3 text-[#ff914d] font-mono bg-gray-100 px-3 py-1 rounded-md">
                  POST /api/products
                </code>
              </div>
            </div>

            {/* DELETE API Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#e74c3c] flex items-start space-x-4">
              <FaTrash className="text-[#e74c3c] text-4xl" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  DELETE: Remove Product
                </h3>
                <p className="text-gray-600 mt-2">
                  Delete a product by its ID. Ensure you pass the correct
                  product ID.
                </p>
                <code className="block mt-3 text-[#e74c3c] font-mono bg-gray-100 px-3 py-1 rounded-md">
                  DELETE /api/products/:id
                </code>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
