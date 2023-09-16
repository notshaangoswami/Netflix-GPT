import { useRef, useState } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/validateData";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInPage, setIsSignInpage] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = validateFormData(
      email.current.value,
      password.current.value
    );

    setErrMessage(message);
    if (message) return;
    //sign/signup logic
    if (isSignInPage) {
      //sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errMessage);
        });
    } else {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errMessage);
        });
    }
  };
  const handleClick = () => {
    setIsSignInpage(!isSignInPage);
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <div className=" absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-opacity-80">
        <form onSubmit={(e) => e.preventDefault()} className="text-white">
          <h1 className="text-xl font-bold">
            {isSignInPage ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInPage && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="p-4  my-4 w-full rounded-lg bg-gray-700"
          />
          <button
            className="p-4 my-6  bg-red-700 rounded-lg w-full "
            onClick={handleButtonClick}
          >
            {isSignInPage ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-red-500 font-bold text-lg py-2">{errMessage}</p>
          <p className="cursor-pointer" onClick={handleClick}>
            {isSignInPage
              ? "Not an Existing user?Sign up!"
              : "Already have an account?Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
