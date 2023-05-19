import { useRef } from "react";
import image from "../assets/image/pattern.jpg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    console.log(email, password);
    emailRef.current.value = "";
    passwordRef.current.value = "";
    navigate("/dashboard");
  };

  return (
    <div
      className="w-full h-[100vh] grid place-items-center bg-slate-800 bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <form
        className="flex flex-col bg-gray-200 p-12 items-start rounded-xl text-slate-800"
        onSubmit={submitHandler}
      >
        <h1 className="mb-5 font-semibold text-xl">Welcome to PNGKY DASH</h1>
        <div className="flex flex-col items-start mb-3 w-full">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Masukkan email.."
            className="p-1 w-full"
            ref={emailRef}
          />
        </div>
        <div className="flex flex-col items-start mb-3 w-full">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Masukkan password.."
            className="p-1 w-full"
            ref={passwordRef}
          />
        </div>
        <button className="px-4 py-2 bg-slate-800 text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
