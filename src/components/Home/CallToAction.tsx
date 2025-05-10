import MyContainer from "../Shared/MyContainer/MyContainer";


const CallToAction = () => {
    return (
        <MyContainer>
            <section className="bg-[#E63946] text-white py-16 text-center">
  <h2 className="text-3xl font-bold mb-4">Find Your Perfect Ride</h2>
  <p className="mb-6">Explore our full collection and experience the freedom of the ride today.</p>
  <a href="/bicycles" className="bg-white text-[#E63946] font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition">
    Browse Bicycles
  </a>
</section>

        </MyContainer>
    );
};

export default CallToAction;