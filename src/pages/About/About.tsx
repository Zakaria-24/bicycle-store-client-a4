import bicycle_about from "../../assets/images/bicycle_about.png"

const About = () => {
  return (
    <div className="bg-white">
<div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#E63946] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to TrailBlazer Bikes</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Your journey to adventure, performance, and freedom begins with the perfect ride.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src={bicycle_about}
          alt="About Bikes"
          className="rounded-xl w-full h-full object-cover shadow-md"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-[#E63946]">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At TrailBlazer, we are committed to making cycling accessible, exciting, and reliable for everyone.
            From daily commuters to trail conquerors — we offer bikes that perform and last.
          </p>
          <p className="text-gray-700">
            We believe in eco-friendly transportation, an active lifestyle, and a community driven by two wheels.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10 text-[#E63946]">Why Ride With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Premium Bikes",
                desc: "Top-tier brands with cutting-edge engineering for speed, comfort, and safety.",
              },
              {
                title: "Seamless Checkout",
                desc: "Enjoy fast and secure purchases with trusted payment gateways like SSLCommerz or Stripe.",
              },
              {
                title: "Rider Support",
                desc: "Our experts are here to guide you through every step — from choosing to maintaining your bike.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2 text-[#E63946]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#E63946]">Ready to Ride?</h2>
        <p className="text-gray-700 mb-6">
          Explore our latest bikes and gear up for your next adventure.
        </p>
        <a
          href="/bicycles"
          className="bg-[#E63946] hover:bg-[#d12f3a] text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Browse Bicycles
        </a>
      </section>
    </div>
    </div>
  );
};

export default About;
