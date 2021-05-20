import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.svg";

export const Header = () => {
  return (
    <header className="pt-1">
      <div className="max-w-7xl mx-auto px-2 flex justify-between ">
        <div>
          <Link to="/">
            <img src={logo} className="h-24 w-24 flex-1" alt="logo"></img>
          </Link>
        </div>
        <ul className="flex justify-center items-center">
          <li className="mr-6">
            <Link to="/about" className="font-headline text-gray-800 text-lg">
              about
            </Link>
          </li>
          <li className="mr-6">
            <Link to="/about" className="font-headline text-gray-800 text-lg">
              changelog
            </Link>
          </li>
          <li className="mr-6">
            <Link to="/about" className="font-headline text-gray-800 text-lg">
              github
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-headline text-lg">
              <button className="py-2 px-5 rounded-md bg-brand-dark text-white border-brand">
                login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
