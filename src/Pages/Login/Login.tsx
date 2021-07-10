import { useRef, useState } from "react";
import { Navigate, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { LoginTypes } from "./login.types";
import { useUserResponseData } from "../../hooks";

export const Login = (): JSX.Element => {
  const location = useLocation();
  const pathRef = useRef<LoginTypes>(location.state);
  const { isUserLoggedIn, loginUser } = useUserResponseData();
  const [error, setError] = useState<string>("");

  const loginOnFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const email = (e.currentTarget[0] as HTMLInputElement).value.trim();
    const password = (e.currentTarget[1] as HTMLInputElement).value.trim();

    if (email === "" || password === "")
      return setError("Email and Password Fields Are Required!");

    const response = await loginUser(email, password);
    !response && setError("Wrong credentials! Try again.");
  };

  return (
    <>
      {isUserLoggedIn && <Navigate to={pathRef.current?.from || "/"} replace />}
      <div className="h-screen bg-brand-background ">
        <div className="font-headline h-screen w-full flex flex-col justify-center items-center">
          <div className="max-w-xl bg-white shadow-md rounded-lg overflow-hidden mx-auto">
            <div className="py-4 px-8 mt-3 w-96">
              <div className="flex flex-col mb-8">
                <h2 className="text-gray-700 font-bold text-2xl tracking-wide mb-10 mt-6">
                  Log In To Play Trivias
                </h2>
                <form onSubmit={loginOnFormSubmit}>
                  <div className="w-full mb-4">
                    <label className="text-sm block font-medium text-gray-500 tracking-wide">
                      Email
                    </label>
                    <input
                      className="text-base p-2 border w-full border-gray-300 rounded-sm focus:outline-none focus:border-indigo-500"
                      id="email"
                      type="email"
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label className="text-sm block font-medium text-gray-500 tracking-wide">
                      Pasword
                    </label>
                    <input
                      className="text-base p-2 border w-full border-gray-300 rounded-sm focus:outline-none focus:border-indigo-500"
                      id="password"
                      type="password"
                    />
                  </div>
                  <div className="w-full mb-6 ">
                    {error && (
                      <p className="text-red-700 text-base text-center block"></p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="block tracking-widest uppercase text-center shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
                  >
                    Sign In
                  </button>
                </form>
                <div className="mt-8 mb-0">
                  <span className="font-semibold pr-1 text-gray-700">
                    Don't have an account?
                  </span>
                  <Link
                    to="/register"
                    state={{ from: pathRef.current?.from || "/" }}
                    replace
                  >
                    Sign up
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
