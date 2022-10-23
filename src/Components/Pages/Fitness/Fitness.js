import React, { useEffect, useState } from "react";
import SharedNav from "../Shared/SharedNav";
import FitnessOneImage from "../../../assets/Image/Fitness/kik.png";
import FitnessTwoImage from "../../../assets/Image/Fitness/nu.png";
import Package from "../Package/Package";
import AllPackages from "../Package/AllPackage";
import { Link } from "react-router-dom";
import AuthUser from "../../../hooks/AuthUser/AuthUser";
import Loading from "../../../hooks/Loading/Loading";

const Fitness = () => {
  const { token, email } = AuthUser()
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`http://crossfitassemble.xyz/api/users/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setUserData(data)
        setLoading(false)
        // console.log(data)
      }
      )
  }, [token])

  // get current user data
  let currentUser = []
  if (userData.length > 0) {
    currentUser = userData?.filter(item => item?.email === email)
  }

  // console.log(currentUser[0]?.is_full_active)
  return (
    <>
      <SharedNav />
      <div className="fitness_margin grid grid-cols-1 items-center md:grid-cols-2 gap-8 mid-container">
        <div className="fitness_content z-20 order-2 md:order-1">
          <span className="bg-[#dbdce0] text-xs sm:text-sm md:text-md p-2 rounded-3xl text-[#071B46]">
            <button className="btn btn-xs hover:bg-slate-400 border-0 rounded-3xl bg-white text-[#071B46]">
              NEW
            </button>{" "}
            High Intensity workout to burn calories
          </span>

          <h1 className="md:text-[80px] text-[50px] my-5 text-primary font-bold">
            KICK
            <br />
            <span>BOXING</span>
          </h1>
          <p className="text-[#071B46] mb-5 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="">
            <Link to={'/login'}><button className="btn btn-primary text-md w-36 font-bold">
              Get Started
            </button></Link>
            {/* <button className="btn bg-[#E5E5E5] mt-5 sm-mt-0 text-md w-36 ml-4 hover:text-white font-bold border-0 text-[#071B46]">
              Preview
            </button> */}
          </div>
        </div>
        <div className="fitness_image order-1 md:order-2 z-10 bg-[#071B46] flex items-center justify-center">
          <img src={FitnessOneImage} alt="" />
        </div>
      </div>

      <div className="fitness_margin z-20 grid grid-cols-1 items-center md:grid-cols-2 gap-8 mid-container">
        <div className="fitness_image bottom_margin flex items-center justify-center pt-5">
          <img className="z-10" src={FitnessTwoImage} alt="" />
        </div>
        <div className="fitness_content right_to_left mt-0">
          <h1 className="md:text-[80px] text-[50px] my-5 text-primary font-bold">
            NUTRITION
            <br />
            <span>PLAN</span>
          </h1>
          <p className="text-[#071B46] mb-5 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="">
            {/* <button className="btn bg-[#E5E5E5] mt-5 sm-mt-0 text-md w-36  hover:text-white ml-4 font-bold border-0 text-[#071B46]">
              Preview
            </button> */}
            <Link to={'/login'}><button className="btn btn-primary text-md w-36 font-bold">
              Get Started
            </button></Link>
          </div>
        </div>
      </div>
      {
        loading ? <Loading /> :
          <>
            {
              currentUser[0]?.is_full_active === true &&
              <>
                <div className="mid-container">
                  <h1 className="uppercase mt-16 mb-5 text-primary font-extrabold text-3xl ">
                    recomended
                    <br /> packeges for you
                  </h1>
                  <AllPackages />
                </div>
              </>
            }
          </>
      }
    </>
  );
};

export default Fitness;
