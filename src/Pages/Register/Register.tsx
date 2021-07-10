import { useRef, useState } from "react";
import { Navigate, useLocation } from "react-router";
import { FromType } from "./Register.types";
import { useUserResponseData } from "../../hooks";

export const Register = (): JSX.Element => {
  const location = useLocation();
  const { isUserLoggedIn, signUpUser, userLoading } = useUserResponseData();
  const pathRef = useRef<FromType>(location.state);
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signUpOnFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const name = (e.currentTarget[0] as HTMLInputElement).value.trim();
    const email = (e.currentTarget[1] as HTMLInputElement).value.trim();
    const password = (e.currentTarget[2] as HTMLInputElement).value.trim();

    if (name === "" || email === "" || password === "")
      return setError("All fields are required!");

    const response = await signUpUser({
      name,
      email,
      password,
      path: "register",
    });

    !response && setError("Unable to sign up! Try again.");
  };

  return (
    <>
      {isUserLoggedIn && <Navigate to={pathRef.current?.from || "/"} replace />}
      <div className="h-screen bg-brand-background">
        <div className="font-headline h-screen w-full flex flex-col justify-center items-center">
          <div className="max-w-lg bg-white shadow-md rounded-lg overflow-hidden mx-auto">
            <div className="py-4 px-8 mt-3">
              <div className="flex flex-col mb-8">
                <h2 className="text-gray-700 font-bold text-2xl tracking-wide mb-10 mt-6">
                  Create your Yoga Trivia Account
                </h2>
                <form onSubmit={signUpOnFormSubmit}>
                  <div className="w-full mb-4">
                    <label className="text-sm block font-medium text-gray-500 tracking-wide">
                      Full Name
                    </label>
                    <input
                      className="text-base p-2 border w-full border-gray-300 rounded-sm focus:outline-none focus:border-indigo-500"
                      id="name"
                      type="text"
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label
                      className="text-sm block font-medium text-gray-500 tracking-wide"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="text-base p-2 border w-full border-gray-300 rounded-sm focus:outline-none focus:border-indigo-500"
                      id="email"
                      type="email"
                    />
                  </div>
                  <div className="w-full mb-4 ">
                    <label
                      className="text-sm block font-medium text-gray-500 tracking-wide"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="text-base p-2 border w-full border-gray-300 rounded-sm focus:outline-none focus:border-indigo-500"
                      id="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="signup__error">{error}</div>
                  <button
                    type="submit"
                    className="block tracking-widest uppercase text-center shadow bg-indigo-600  motion-safe:hover:scale-110 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
                  >
                    {/* {userLoading ? "Signin up.." : "SIGN UP"}
                     */}
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
