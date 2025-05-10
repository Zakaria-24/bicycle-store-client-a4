
import MyContainer from '../Shared/MyContainer/MyContainer';

const WhyChooseUs = () => {
    return (
        <MyContainer>
            <section className="bg-gray-100 py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-10 text-[#E63946]">Why Choose TrailBlazer?</h2>
    <div className="grid md:grid-cols-3 gap-8 text-left">
      {[
        {
          title: "Top Quality Builds",
          desc: "Every bike is crafted with premium materials and advanced engineering for durability and comfort.",
        },
        {
          title: "Unbeatable Prices",
          desc: "Get the best value with affordable bikes that rival top-tier brands.",
        },
        {
          title: "Fast Delivery",
          desc: "We ship nationwide with guaranteed 3–5 day delivery and real-time tracking.",
        },
      ].map((item, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-[#E63946]">{item.title}</h3>
          <p className="text-gray-700">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        </MyContainer>
    );
};

export default WhyChooseUs;