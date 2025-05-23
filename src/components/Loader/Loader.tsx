import cycleLoading from "../../assets/animation/bicycle_store.json";
import Lottie from "lottie-react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-48 md:w-96">
        <Lottie animationData={cycleLoading} loop={true} />
      </div>
    </div>
  );
};

export default Loader;
