import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CountrySelect from "./CountrySelect";
import * as emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const [selectedCountryName, setSelectedCountryName] = useState("");
  const [interestedInOptions, setInterestedInOptions] = useState("");

  const onSubmitParam = (data) => {
    const formData = {
      user_name: data.floating_first_name,
      user_email: data.floating_email,
      phone: data.floating_phone,
      message: data.floating_message,
    };

    emailjs
      .send(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        formData,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        function (response) {
          if (response.status === 200) {
            toast.success("Message sent successfully");
            reset();
          }
        },
        function (error) {
          if (error) {
            toast.error("Message not sent");
          }
        }
      );
  };

  return (
    <div className="mt-16 bg-[#1A191A] py-10 md:py-20">
      <div className="mid-container md:flex justify-between items-center  ">
        <div className="md:w-[50%] mb-4 md:mb-0">
          <h2 className="text-4xl font-semibold text-white">
            Want to join us?
          </h2>
          <h2 className="text-4xl font-semibold text-white mt-1">
            Let's discuss
          </h2>
          <p className="text-secondary mt-5 tracking-wider">
            Thank you for getting in touch!
          </p>
          <p className="text-secondary tracking-wider">Kindly.</p>
          <p className="text-secondary tracking-wider">
            {" "}
            Fill the form, have a great day!
          </p>
        </div>
        <div className="md:w-[50%]">
          <form onSubmit={handleSubmit(onSubmitParam)}>
            <div className="md:grid grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("floating_first_name", {
                    required: "Name is required",
                    pattern: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                  })}
                  onKeyUp={(e) => {
                    trigger("floating_first_name");
                  }}
                />
                {/* <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.floating_first_name?.message}</small> */}

                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your name
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("floating_email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid Email",
                    },
                  })}
                  onKeyUp={(e) => {
                    trigger("floating_email");
                  }}
                />
                {/* <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.floating_email?.message}</small> */}

                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
            </div>

            <div className="md:flex gap-5">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("floating_phone", {
                    required: "Number is required",
                  })}
                  onKeyUp={(e) => {
                    trigger("floating_phone");
                  }}
                />
                {/* <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.floating_phone?.message}</small> */}

                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>

              <div className="relative  z_index mb-6 w-full group border-b-2 border-gray-300">
                <CountrySelect
                  setSelectedCountryName={setSelectedCountryName}
                />
              </div>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="floating_message"
                id="floating_message"
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("floating_message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Minimum message length is 10 characters",
                  },
                  maxLength: {
                    value: 100,
                    message: "Maximum message length is 100 characters",
                  },
                })}
                onKeyUp={(e) => {
                  trigger("floating_message");
                }}
              />
              <label
               htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Message
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-md px-10 mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
