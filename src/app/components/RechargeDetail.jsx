import React from "react";

const RechargeDetail = () => {
  return (
    <>
      <div className="text-lg md:text-xl font-bold flex gap-2 justify-center items-center px-2 mt-4">
        Recharge:
        <span>
          <div className="flex justify-center items-center gap-2">
            <p className="text-[#FE2C55] text-sm md:text-lg">
              Save up to 31% compared to in-app purchase
            </p>
            <svg
              className="fill-gray-400"
              width="1em"
              data-e2e=""
              height="1em"
              viewBox="0 0 48 48"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM27 16C27 17.6569 25.6569 19 24 19C22.3431 19 21 17.6569 21 16C21 14.3431 22.3431 13 24 13C25.6569 13 27 14.3431 27 16ZM23 22C22.4477 22 22 22.4477 22 23V34C22 34.5523 22.4477 35 23 35H25C25.5523 35 26 34.5523 26 34V23C26 22.4477 25.5523 22 25 22H23Z"
              ></path>
            </svg>
          </div>
        </span>
      </div>
    </>
  );
};

export default RechargeDetail;
