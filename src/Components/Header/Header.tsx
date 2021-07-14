import { Link } from "react-router-dom";
import { useUserResponseData } from "../../hooks";

export const Header = () => {
  const { isUserLoggedIn, userData, logOutUser } = useUserResponseData();

  console.log(userData);
  return (
    <header className="pt-1">
      <div className="max-w-7xl mx-auto px-2 flex justify-between ">
        <div>
          <Link to="/">
            <img
              src="https://yoga-trivia-assets.s3.ap-south-1.amazonaws.com/logo.svg"
              className="h-24 w-24 flex-1"
              alt="logo"
            ></img>
          </Link>
        </div>
        <ul className="flex justify-center items-center">
          <li className="mr-6">
            <a
              href="https://github.com/suyashpradhan/yoga-trivia"
              className="font-headline text-gray-800 text-lg  hover:text-brand-dark"
            >
              github
            </a>
          </li>
          {isUserLoggedIn ? (
            <ul className="flex justify-center items-center ">
              <li className="text-lg mr-6 font-headline">
                Hello {userData.name}
              </li>
              <li>
                <button
                  className="py-2 px-5 font-headline rounded-md
                border-brand-danger bg-brand-danger text-white text-lg hover:bg-white hover:text-brand-danger
                hover:border-brand-danger border focus:outline-none focus:ring-2 focus:ring-brand-danger focus:ring-opacity-50"
                  onClick={logOutUser}
                >
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <li>
              <Link to="/login" className="font-headline">
                <button className="py-2 px-5 rounded-md bg-brand text-gray-800 text-xl  hover:bg-brand-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-opacity-50">
                  Sign in
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};
