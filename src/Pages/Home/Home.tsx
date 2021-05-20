import { Header } from "../../Components/Header";
import { Link } from "react-router-dom";
import banner1 from "../../Assets/images/banner 1.png";

export const Home = () => {
  return (
    <div className="h-screen">
      <Header />

      <div className="px-2 bg-brand-background_light">
        <div className="max-w-7xl mx-auto flex justify-start">
          <div className="flex-1">
            {/* <h1>A Perfect Time For a Bit Of Relax and Yoga Chill</h1> */}
          </div>
          <div className="flex-auto">
            <img src={banner1} alt="banner" className=""></img>
          </div>
        </div>
        <div>
          <Link to="/quiz">
            <button className="bg-red-700 p-1 text-white rounded-sm">
              Explore Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
