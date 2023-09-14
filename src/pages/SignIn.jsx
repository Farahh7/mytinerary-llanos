import React, { useRef, useState } from "react";
import { Link as Anchor, Navigate, useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import user_actions from "../store/actions/users";
const { signin } = user_actions;

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const mail_signin = useRef("");
  const pass_signin = useRef("");
  const dispatch = useDispatch();

  async function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: pass_signin.current.value,
    };

    dispatch(signin({ data }))

      .then((res) => {
        if (res.payload.token) {
          Swal.fire({
            title: "Welcome to MyTinerary😄",
          });

        } else if (res.payload.messages.length > 0) {
          let html = res.payload.messages.map(each => `<p>${each}</p>`).join('')
          Swal.fire({
            title: 'Something went wrong',
            icon: 'error',
            html
          })
        }
      })
      .catch(err => console.log(err))
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  let store = useSelector((store) => store)
  console.log(store, "este es store");
  let user = useSelector((store) => store.users.user);
  console.log(user, "este es user");

  return (
    <>
      {user.mail ? <Navigate to='/' /> :
        <div className="w-full min-h-screen mt-5 flex flex-col
    lg:flex-row lg:justify-between">
          <h1 className="font-bold text-slate-200 self-center mt-14 text-[28px]
            md:text-[36px]
            lg:ml-[180px] lg:text-[48px]
            min-[1800px]:ml-[350px]
            min-[2300px]:ml-[500px]">My Tinerary</h1>
          <div className="flex flex-col items-center bg-white rounded-lg m-6 px-2 py-8
            md:w-1/2 md:self-center md:py-16
            lg:mx-[120px] lg:my-[100px] lg:py-10
            min-[1440px]:w-1/3 min-[1440px]:mr-[200px]
            min-[1800px]:w-1/4 min-[1800px]:mr-[350px] min-[1800px]:py-20
            min-[2300px]:mr-[500px]">

            <h1 className="mb-5 text-xl md:text-2xl font-bold">Sign in 🛩</h1>
            <form className="w-full flex flex-col items-center">
              <div className="flex flex-col grow justify-center items-center">
                <input
                  ref={mail_signin}
                  type="email"
                  name="mail_signin"
                  id="mail_signin"
                  defaultValue=""
                  placeholder="Email"
                  className="w-2/3 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            lg:w-1/2 lg:my-4"
                />
              </div>
              <div className="flex flex-col grow justify-center items-center">
                <input
                  ref={pass_signin}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-2/3 my-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            lg:w-1/2 lg:my-4"
                />
                <i
                  className={`bi bi-eye${showPassword ? "" : "-slash"} absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer`}
                  onClick={handleTogglePassword}
                ></i>
              </div>
              <div className="flex flex-col text-gray-500
          md:flex-row md:gap-1">
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="text-center">
                <button
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  onClick={handleSignIn}
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <span>New user?</span>
              <Anchor to={"/auth/signup"} className="text-blue-600 ml-1">
                Sign Up
              </Anchor>
            </div>
            <div className="flex items-end justify-center">
              <div className="w-[150px] text-[12px] border-b border-[#1c1c1c] h-[30px] m-2"></div>
              <p className="flex m-2">O</p>
              <div className="w-[150px] text-[12px] border-b border-[#1c1c1c] h-[30px] m-2"></div>
            </div>
            <p className="text-[12px] text-[#1C1C1C] font-semibold mt-4">Sign up with email</p>
            <button className="flex items-center justify-center w-[220px] h-[40px] border border-solid border-slate-900 mt-10 rounded-[80px] p-[15px] cursor-pointer">
              <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Google" className="w-[30px] h-[30px] mr-2" />
              <span className="text-[14px] font-semibold ml-2">Continue with Google</span>
            </button>
            <button className="flex items-center justify-center w-[220px] h-[40px] border border-solid border-slate-900 mt-5 rounded-[80px] p-[15px] cursor-pointer" >
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" alt="Facebook" className="w-[23px] h-[23px] mr-2" />
              <span className="text-[14px] font-semibold ml-2">Continue with Facebook</span>
            </button>
            <Anchor to="/auth/signup" className="text-[12px] text-[#1C1C1C] pb-2">Already have an account? <span className="text-bold cursor-pointer text-blue-600 underline">Sign up</span></Anchor>
          </div>
        </div>

      }

    </>

  );
}




















/* import React, { useRef } from "react";
import { Link as Anchor, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import user_actions from "../store/actions/users";
import UserLogged from "../components/UserLogged";
import Swal from "sweetalert2";

const { signin } = user_actions;

export default function FormSignIn() {
  const navigate = useNavigate()
  const mail_signin = useRef("");
  const [showPassword, setShowPassword] = useState(false);
  const password_signin = useRef("");
  const dispatch = useDispatch();

  async function handleSignIn() {
    const data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };

    try {
      const response = await dispatch(signin({ data }));
      if (response.payload.token) {
        Swal.fire({
          icon: "success",
          title: "Login Exitoso",
          text: "Has iniciado sesión correctamente.",
        });
        navigate('/');
      } else {
        // Manejar otros posibles errores de inicio de sesión aquí
        Swal.fire({
          icon: "error",
          title: "Error en el inicio de sesión",
          text: "Ha ocurrido un error al intentar iniciar sesión.",
        });
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      // Manejar el error de inicio de sesión aquí y mostrar un mensaje apropiado
      Swal.fire({
        icon: "error",
        title: "Error en el inicio de sesión",
        text: "Ha ocurrido un error al intentar iniciar sesión.",
      });
    }
  }
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  let user = useSelector(store=>store.users.user)
  console.log(user);

  const InputField = React.forwardRef(({ placeholder, type, name }, ref) => {
    return (
      <input
        className="w-1/2 my-4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        ref={ref}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    );
  });

  return (
    <div className="flex flex-col h-[120vh] bg-cover bg-center justify-around items-center sm:flex-row">
      <div className="flex flex-col">
        <UserLogged />
        <div className="w-[50%] flex flex-col items-center text-center justify-center md:pl-20 pb-16 mt-20">
          <h1 className="text-4xl mx-3 font-bold mb-16">My Tinerary</h1>
        </div>
      </div>
      <div className="flex flex-col w-[400px] bg-neutral-50 p-6 ml-[300px] bg-white rounded-lg shadow-lg">
        <h1 className="text-[20px] items-start justify-center pb-4">Sign In</h1>
        <form className="flex flex-col grow justify-center items-center">
          <InputField ref={mail_signin} type="text" name="mail_signin" placeholder="Type Mail" />
          <InputField ref={pass_signin} type={showPassword ? "text" : "password"} 
                        name='password' id='password'placeholder='Password' className='password'/>
                        < className={`bi bi-eye${showPassword ? "" : "-slash"} eye-icon`}
                          onClick={handleTogglePassword}></i>
          <button className="text-white w-[350px] py-1 text-center bg-[#4F46E5] cursor-pointer mt-10 rounded-xl" onClick={handleSignIn}>
            Sign In!
          </button>
        </form>

        <div className="flex items-end justify-center">
          <div className="w-[150px] text-[12px] border-b border-[#1c1c1c] h-[30px] m-2"></div>
          <p className="flex m-2">O</p>
          <div className="w-[150px] text-[12px] border-b border-[#1c1c1c] h-[30px] m-2"></div>
        </div>
        <p className="text-[12px] text-[#1C1C1C] font-semibold mt-4">Sign up with email</p>
        <button className="flex items-center justify-center w-[220px] h-[40px] border border-solid border-slate-900 mt-10 rounded-[80px] p-[15px] cursor-pointer">
          <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Google" className="w-[30px] h-[30px] mr-2" />
          <span className="text-[14px] font-semibold ml-2">Continue with Google</span>
        </button>
        <button className="flex items-center justify-center w-[220px] h-[40px] border border-solid border-slate-900 mt-5 rounded-[80px] p-[15px] cursor-pointer" >
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" alt="Facebook" className="w-[23px] h-[23px] mr-2" />
          <span className="text-[14px] font-semibold ml-2">Continue with Facebook</span>
        </button>
        <Anchor to="/auth/signup" className="text-[12px] text-[#1C1C1C] pb-2">Already have an account? <span className="text-bold cursor-pointer text-blue-600 underline">Sign up</span></Anchor>

      </div>
    </div>
  );
}

]*/























/* import React, { useRef } from "react";
import { Link as Anchor, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import user_actions from "../store/actions/users";
import UserLogged from "../components/UserLogged";
import Swal from "sweetalert2";

const { signin } = user_actions;

export default function FormSignIn() {
  const navigate = useNavigate()
  const mail_signin = useRef("");
  const [showPassword, setShowPassword] = useState(false);
  const password_signin = useRef("");
  const dispatch = useDispatch();

  async function handleSignIn() {
    const data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };

    try {
      const response = await dispatch(signin({ data }));
      if (response.payload.token) {
        Swal.fire({
          icon: "success",
          title: "Login Exitoso",
          text: "Has iniciado sesión correctamente.",
        });
        navigate('/');
      } else {
        // Manejar otros posibles errores de inicio de sesión aquí
        Swal.fire({
          icon: "error",
          title: "Error en el inicio de sesión",
          text: "Ha ocurrido un error al intentar iniciar sesión.",
        });
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      // Manejar el error de inicio de sesión aquí y mostrar un mensaje apropiado
      Swal.fire({
        icon: "error",
        title: "Error en el inicio de sesión",
        text: "Ha ocurrido un error al intentar iniciar sesión.",
      });
    }
  }
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  let user = useSelector(store=>store.users.user)
  console.log(user);

  const InputField = React.forwardRef(({ placeholder, type, name }, ref) => {
    return (
      <input
        className="w-1/2 my-4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        ref={ref}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    );
  });

  return (
    <div className="flex flex-col h-[120vh] bg-cover bg-center justify-around items-center sm:flex-row">
      <div className="flex flex-col">
        <UserLogged />
        <div className="w-[50%] flex flex-col items-center text-center justify-center md:pl-20 pb-16 mt-20">
          <h1 className="text-4xl mx-3 font-bold mb-16">My Tinerary</h1>
        </div>
      </div>
      <div className="flex flex-col w-[400px] bg-neutral-50 p-6 ml-[300px] bg-white rounded-lg shadow-lg">
        <h1 className="text-[20px] items-start justify-center pb-4">Sign In</h1>
        <form className="flex flex-col grow justify-center items-center">
          <InputField ref={mail_signin} type="text" name="mail_signin" placeholder="Type Mail" />
          <InputField ref={pass_signin} type={showPassword ? "text" : "password"} 
                        name='password' id='password'placeholder='Password' className='password'/>
                        < className={`bi bi-eye${showPassword ? "" : "-slash"} eye-icon`}
                          onClick={handleTogglePassword}></i>
          <button className="text-white w-[350px] py-1 text-center bg-[#4F46E5] cursor-pointer mt-10 rounded-xl" onClick={handleSignIn}>
            Sign In!
          </button>
        </form>

        <div className="flex items-end justify-center">
          <div className="w-[150px] text-[12px] border-b border-[#1c1c1c] h-[30px] m-2"></div>
          <p className="flex m-2">O</p>
          <div className="w-[150px] text-[12px] border-b border-[#1c1c1c] h-[30px] m-2"></div>
        </div>
        <p className="text-[12px] text-[#1C1C1C] font-semibold mt-4">Sign up with email</p>
        <button className="flex items-center justify-center w-[220px] h-[40px] border border-solid border-slate-900 mt-10 rounded-[80px] p-[15px] cursor-pointer">
          <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Google" className="w-[30px] h-[30px] mr-2" />
          <span className="text-[14px] font-semibold ml-2">Continue with Google</span>
        </button>
        <button className="flex items-center justify-center w-[220px] h-[40px] border border-solid border-slate-900 mt-5 rounded-[80px] p-[15px] cursor-pointer" >
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" alt="Facebook" className="w-[23px] h-[23px] mr-2" />
          <span className="text-[14px] font-semibold ml-2">Continue with Facebook</span>
        </button>
        <Anchor to="/auth/signup" className="text-[12px] text-[#1C1C1C] pb-2">Already have an account? <span className="text-bold cursor-pointer text-blue-600 underline">Sign up</span></Anchor>
      </div>
    </div>
  );
}
]*/