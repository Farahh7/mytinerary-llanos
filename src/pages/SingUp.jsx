import { useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor } from "react-router-dom";

function InputField({ placeholder, type, name, reference }) {
  return (
    <input
      className="w-1/2 my-4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      ref={reference}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
    />
  );
}
function SignUpForm({ handleSignUp }) {
  const fields = [
    { placeholder: "Type Name", type: "text", name: "name" },
    { placeholder: "Type Lastname", type: "text", name: "lastName" },
    { placeholder: "Type Country", type: "text", name: "country" },
    { placeholder: "Photo", type: "text", name: "photo" },
    { placeholder: "Type Mail", type: "text", name: "mail" },
    { placeholder: "Type Password", type: "password", name: "password" }
  ];
  const inputFields = fields.map((field, index) => (
    <InputField
      key={index}
      placeholder={field.placeholder}
      type={field.type}
      name={field.name}
      reference={field.reference}
    />
  ));

  return (
    <form className="w-full max-w-md flex flex-col items-center">
      {inputFields}
      <input
        className="w-1/2 my-4 px-3 py-2 rounded bg-indigo-200 hover:bg-indigo-500 hover:text-white cursor-pointer"
        type="button"
        value="Sign Up!"
        onClick={handleSignUp}
      />
      <p className="flex gap-1 text-gray-500">
        Already have an account?{" "}
        <Anchor to="/signin" className="text-black font-semibold hover:text-indigo-500">
          Sign In
        </Anchor>
      </p>
    </form>
  );
}


export default function SignUp() {
  

  async function handleSignUp() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };
      await axios.post(
        
        apiUrl + "users/signup",
        data
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full mt-5 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center">
      <h1 className="mt-8 md:mt-24 md:ml-8 text-3xl font-bold text-slate-200 md:text-4xl md:font-bold md:text-slate-200" style={{ textShadow: '0px 0px 5px black' }}>
        My Tinerary
      </h1>
      <div className="w-full md:w-1/3 mx-auto my-5 md:my-8 flex flex-col items-center py-5 bg-white rounded-lg shadow-lg">
        <h1 className="mb-5 text-xl md:text-2xl font-bold">Create an account</h1>
        <SignUpForm handleSignUp={handleSignUp} />
      </div>
    </div>
  );
}