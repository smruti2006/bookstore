import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import axios from "axios";
import { useForm } from "react-hook-form";
const Signup = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.Name,
      email: data.email,
      password: data.password,
    };
    await axios.post("http://localhost:4001/user/signup", userinfo)
    .then((res)=>{
        console.log(res.data)
        if(res.data){
            alert("Signup Successfully")
        }
        localStorage.setItem("User",JSON.stringify(res.data))
    }).catch((err)=>{
        alert("Signup Error:"+err)
        console.log(err)
    }
)

  };
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <div className="flex h-screen items-center justify-center">
        <div
          id="my_modal_4"
          className="relative border-1 p-5 rounded-2xl "
          style={{ boxShadow: "0 4px 20px rgba(251, 191, 36, 0.5)" }}
        >
          <div className="">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Login</h3>
              <h3 className="mt-5">Enter Your Full Name</h3>
              <input
                type="text"
                placeholder="Enter Your Name  here"
                className="input mt-2 w-110"
                {...register("Name", { required: true })}
              />{" "}
              <h3 className="mt-5">Email</h3>
              <div className="mt-2">
                <label className="input validator w-full">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="mail@site.com"
                    required
                  />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
              </div>
              <h3 className="mt-10">Password</h3>
              <div className="mt-2 ">
                <label className="input validator w-full">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle
                        cx="16.5"
                        cy="7.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    minlength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    {...register("password", { required: true })}
                  />
                </label>
                <p className="validator-hint hidden">
                  Must be more than 8 characters, including
                  <br />
                  At least one number <br />
                  At least one lowercase letter <br />
                  At least one uppercase letter
                </p>
              </div>
              <div className="flex items-center gap-10">
                <button className="btn btn-secondary mt-4 w-30">Sign UP</button>
                <div className="flex gap-2 ml-20">
                  <div>Already Singup?</div>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
