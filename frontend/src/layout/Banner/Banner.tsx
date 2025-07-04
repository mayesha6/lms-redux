export const Banner = () => {
  return (
    <section
      className="relative bg-contain bg-fixed bg-center text-white h-[700px] mb-28"
      style={{
        backgroundImage: "url('/banner.jpg')",
      }}
    ><div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex justify-center items-center h-full">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Our Library
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Explore thousands of books. Borrow, read, and enjoy anytime.
          </p>
          <a
            href="/books"
            className="inline-block bg-white text-purple-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
          >
            Browse Books
          </a>
        </div>
      </div>
    </section>
  );
};
