import MyContainer from "../Shared/MyContainer/MyContainer";


const CustomerTestimonial = () => {
    return (
        <MyContainer>
            <section className="py-16 px-6 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-[#E63946] mb-10">What Our Riders Say</h2>
    <div className="space-y-10">
      {[
        {
          quote: "Absolutely love my CityRider Pro. It's lightweight, smooth, and turns heads everywhere I go.",
          name: "Nusrat Jahan",
        },
        {
          quote: "The X2000 gave me the confidence to hit off-road trails. Built like a tank but rides like a dream.",
          name: "Farid Alam",
        },
        {
          quote: "I’ve bought two bikes from TrailBlazer. Great customer service and delivery was super fast.",
          name: "Rezaul Karim",
        }
      ].map((review, i) => (
        <blockquote key={i} className="text-gray-700 italic">
          “{review.quote}”
          <span className="block mt-4 font-semibold text-[#E63946]">— {review.name}</span>
        </blockquote>
      ))}
    </div>
  </div>
</section>

        </MyContainer>
    );
};

export default CustomerTestimonial;