import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import { errorClass, noErrorClass } from "../../utils/StyleClasses";
import { signUpApi } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { CreateToast } from "../../utils/Toast";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        try {
          const response = await signUpApi(
            values.email,
            values.password,
            values.username
          );
          setLoading(false);
          CreateToast("Sign", "Sign Up Successful", "success");
          navigate("/signin");
          action.resetForm();
        } catch (err) {
          console.log(err);
        }
        setLoading(false);
      },
    });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 bg-white dark:bg-gray-900 h-screen">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
          <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
            Sign Up
          </h2>
          <p className="mt-2 text-base text-black dark:text-white">
            Already have an account?{" "}
            <span
              title=""
              className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700 cursor-pointer"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Sign In
            </span>
          </p>

          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-black dark:text-white"
                >
                  {" "}
                  Username{" "}
                  {errors.username && touched.username ? (
                    <span className="text-red-500 text-sm font-sm">
                      ({errors.username})
                    </span>
                  ) : null}
                </label>
                <div className="mt-2.5">
                  <input
                    className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-black-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-white dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 ${
                      (values.username && errors.username) !== "" &&
                      (errors.username ? errorClass : noErrorClass)
                    }`}
                    type="text"
                    placeholder="Enter You Username"
                    id="name"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-black-900 dark:text-white"
                >
                  {" "}
                  Email address{" "}
                  {errors.email && touched.email ? (
                    <span className="text-red-500 text-sm font-sm">
                      ({errors.email})
                    </span>
                  ) : null}
                </label>
                <div className="mt-2.5">
                  <input
                    className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-black-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-white dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 ${
                      (values.email && errors.email) !== "" &&
                      (errors.email ? errorClass : noErrorClass)
                    }`}
                    type="email"
                    placeholder="Enter Your Email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm text-black dark:text-white"
                  >
                    Password{" "}
                    {errors.password && touched.password ? (
                      <span className="text-red-500 text-sm font-sm">
                        ({errors.password})
                      </span>
                    ) : null}
                  </label>
                </div>

                <div className="relative flex items-center mt-2">
                  <div
                    className={`absolute right-0 rtl:left-0 rtl:right-auto`}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPassword(!showPassword);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
                    >
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path
                        fill-rule="evenodd"
                        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-black-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-white dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 ${
                      (values.password && errors.password) !== "" &&
                      (errors.password ? errorClass : noErrorClass)
                    }`}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
                  disabled={loading}
                >
                  {loading ? (
                    <ClipLoader color="#fff" />
                  ) : (
                    <>
                      Get started
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
