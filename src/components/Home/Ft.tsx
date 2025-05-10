import { Link } from "react-router-dom";
import img1 from "../../assets/images/featuresImg/christin-hume-gM1y4az4kFA-unsplash.jpg";
import img2 from "../../assets/images/featuresImg/close-up-person-doing-mountain-biking.jpg";
import img3 from "../../assets/images/featuresImg/close-up-vintage-bicycle-with-bell.jpg";
import MyContainer from "../Shared/MyContainer/MyContainer";

const Ft = () => {
    return (
        <MyContainer>
        <section className="py-16">
        <h2 className="text-3xl font-bold text-[#E63946] mb-10 text-center">Featured Bicycles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "TrailBlazer X2000",
              image: img1,
              desc: "A rugged mountain bike built to handle any terrain.",
              price: "$899",
              link: "/bicycles/trailblazer-x2000",
            },
            {
              name: "CityRider Pro",
              image: img2,
              desc: "Smooth, agile, and built for city commuting in style.",
              price: "$699",
              link: "/bicycles/cityrider-pro",
            },
            {
              name: "RoadMaster 300",
              image: img3,
              desc: "Designed for long-distance road warriors who crave speed.",
              price: "$1,099",
              link: "/bicycles/roadmaster-300",
            }
          ].map((bike, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
              <img src={bike.image} alt={bike.name} className="rounded-lg mb-4 h-48 w-full object-cover" />
              <h3 className="text-xl font-semibold text-[#E63946]">{bike.name}</h3>
              <p className="text-gray-600">{bike.desc}</p>
              <p className="mt-2 font-bold text-lg">{bike.price}</p>
              {/* <a href={bike.link} className="text-[#E63946] mt-2 inline-block font-medium hover:underline">View Details</a> */}
              
            </div>
            
          ))}
          
        </div>
        <div className="mt-8 flex justify-center items-center md:mt-4">
            <Link
              to="/bicycles"
              className="bg-primary active:bg-primary uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
            >
              View All
            </Link>
          </div>
      </section>
      </MyContainer>
    );
};

export default Ft;