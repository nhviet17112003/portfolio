export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-pink-500 mb-6">Contact</h3>

        <p className="text-gray-400 mb-2">📧 vietnh03.work@gmail.com</p>
        <p className="text-gray-400 mb-6">📞 0398073861</p>

        <a
          href="https://github.com/nhviet17112003"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 transition"
        >
          GitHub Profile
        </a>
      </div>
    </section>
  );
}
