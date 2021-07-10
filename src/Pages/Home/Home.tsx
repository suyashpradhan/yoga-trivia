import { Header } from "../../Components/Header";
import { Link } from "react-router-dom";
import banner1 from "../../Assets/images/banner 1.png";
import { BsFillCaretRightFill } from "react-icons/bs";

export const Home = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="py-12 px-2 bg-brand-background_light h-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-2">
          <div className="flex justify-center flex-col max-w-xl">
            <h1 className="text-4xl font-headline text-brand-primaryText font-semibold tracking-tight leading-tight">
              A Perfect Time For a Bit Of Relax and Yoga Chill
            </h1>
            <p className="text-xl text-left mt-4 font-headline text-brand-secondaryText font-medium tracking-tight leading-tight">
              Stay at home and play some cool yoga trivias with us!
            </p>
            <Link to="/explore">
              <button className="mt-8 py-3 px-6 rounded-md bg-brand-dark font-headline text-xl font-medium text-white focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-opacity-60 hover:shadow-xl">
                Explore Trivia{" "}
                <BsFillCaretRightFill
                  style={{ display: "inline", verticalAlign: "middle" }}
                />
              </button>
            </Link>
          </div>
          <div className="flex-auto">
            <img src={banner1} alt="banner" className=""></img>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
