export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >
  
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 ">

         <h3 className="text-4xl font-extrabold">
          <span className="text-3xl font-bold text-pink-500 mb-10">
           Contact Me
          </span>
        </h3>
        <p className="text-gray-400 mb-10">
          Let’s connect and build something great together 🚀
        </p>

       
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 shadow-lg hover:shadow-xl transition">
            <div className="text-3xl mb-2">📧</div>
            <p className="text-gray-400 text-sm">Email</p>
            <p className="text-white font-semibold">
              vietnh03.work@gmail.com
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 shadow-lg hover:shadow-xl transition">
            <div className="text-3xl mb-2">📞</div>
            <p className="text-gray-400 text-sm">Phone</p>
            <p className="text-white font-semibold">
              0398 073 861
            </p>
          </div>
        </div>

       
       <div className="flex justify-center">
  <a
    href="https://github.com/nhviet17112003"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl
    bg-gradient-to-r from-pink-500 to-purple-500
    text-white font-semibold shadow-lg
    hover:shadow-pink-500/40 hover:scale-105
    transition-transform duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.1.79-.25.79-.56v-2.04c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.99 0 1.99.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.51 11.51 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
    Visit GitHub Profile
  </a>
</div>

      </div>
    </section>
  );
}
