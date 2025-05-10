import MyContainer from "../Shared/MyContainer/MyContainer";


const TopSell = () => {
    return (
        <MyContainer>
            <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-[#E63946] mb-10">Top Selling Bicycles</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { name: "SpeedRunner Pro", unitsSold: 420, price: "$849" },
        { name: "Urban Sprint", unitsSold: 378, price: "$749" },
        { name: "Mountain Storm X", unitsSold: 360, price: "$999" },
      ].map((bike, idx) => (
        <div key={idx} className="bg-[#e4bdc1] p-6 rounded-xl">
          <h3 className="text-xl font-bold text-[#E63946] mb-2">{bike.name}</h3>
          <p className="text-gray-700">Units Sold: {bike.unitsSold}</p>
          <p className="font-semibold text-lg mt-2">{bike.price}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        </MyContainer>
    );
};

export default TopSell;