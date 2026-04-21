export default function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      
      {/* Hero */}
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
        }}
      >
        <div className="bg-black/60 p-10 rounded-2xl text-center">
          <h1 className="text-5xl font-bold mb-4">
            Discover Your Perfect Trip
          </h1>
          <p className="mb-6">
            Plan smarter. Travel better with TripSync.
          </p>
          <button className="bg-teal-500 px-6 py-3 rounded-xl">
            Start Planning
          </button>
        </div>
      </section>

      {/* Planner */}
      <section className="p-10 bg-gray-900">
        <h2 className="text-3xl text-center mb-6">Plan Your Trip</h2>
        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <input placeholder="Destination" className="p-3 bg-gray-800 rounded" />
          <input placeholder="Budget" className="p-3 bg-gray-800 rounded" />
          <input placeholder="Days" className="p-3 bg-gray-800 rounded" />
          <select className="p-3 bg-gray-800 rounded">
            <option>Weather</option>
            <option>Cold</option>
            <option>Pleasant</option>
            <option>Rain</option>
          </select>
        </div>
      </section>

      {/* Features */}
      <section className="p-10">
        <h2 className="text-3xl text-center mb-8">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Smart Itinerary",
            "Weather Suggestions",
            "Offbeat Activities",
            "Ticket Booking",
            "Solo Connect",
            "Virtual Preview",
          ].map((f, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold">{f}</h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
