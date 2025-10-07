import { useState } from "react";

export default function Index() {
  const [display, setDisplay] = useState("180");
  const [expression, setExpression] = useState("45 x 8 ÷ 2");

  return (
    <div className="min-h-screen bg-[#071622] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-poppins">
      <div className="w-full max-w-sm">
        <div className="bg-calculator-card rounded-2xl p-8 shadow-2xl">
          {/* Builder Logo */}
          <div className="flex justify-center mb-8">
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-7"
            >
              <path
                d="M22.0439 7.75028C22.0439 9.8559 21.0728 11.7348 19.5542 12.9636L1.66669 2.80743C1.5974 2.76808 1.53423 2.72041 1.47825 2.66665C1.46328 2.65223 1.18945 2.41058 1.18945 1.98879C1.18945 1.72885 1.29476 1.49329 1.46547 1.32313C1.63563 1.15242 1.8712 1.04711 2.13115 1.04711H15.3402C19.042 1.04711 22.0433 4.0484 22.0433 7.75028H22.0439Z"
                fill="#070C10"
                stroke="#E84040"
                strokeWidth="2.04283"
                strokeMiterlimit="10"
              />
              <path
                d="M22.0439 18.1769C22.0439 21.8788 19.0426 24.8801 15.3407 24.8801H2.13168C1.66999 24.8801 1.19002 24.5154 1.19002 23.939C1.19002 23.5227 1.45218 23.2883 1.47989 23.2595L1.481 23.2584C1.53643 23.2057 1.5985 23.1591 1.66611 23.1203L8.70351 19.1247L19.5525 12.9647H19.5536V12.9642C21.0723 14.193 22.0433 16.0719 22.0433 18.1775L22.0439 18.1769Z"
                fill="#070C10"
                stroke="#E84040"
                strokeWidth="2.04283"
                strokeMiterlimit="10"
              />
              <path
                d="M19.5542 12.9636H19.5531L8.70408 19.1242L1.66671 23.1198C1.59853 23.1586 1.53644 23.2051 1.48157 23.2578C4.06661 20.5974 5.659 16.9664 5.659 12.9636C5.659 8.96076 4.06607 5.32707 1.47881 2.66608C1.53479 2.71985 1.59797 2.76752 1.66725 2.80687L19.5547 12.963L19.5542 12.9636Z"
                fill="#070C10"
                stroke="#E84040"
                strokeWidth="2.04283"
                strokeMiterlimit="10"
              />
            </svg>
          </div>

          {/* Display */}
          <div className="mb-8">
            <div className="text-white text-right text-lg font-bold mb-2 opacity-80">
              {expression}
            </div>
            <div className="text-white text-right text-7xl font-bold leading-tight">
              {display}
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-3.5">
              <button className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                c
              </button>
              <button className="text-white text-3xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                %
              </button>
              <button className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                ±
              </button>
              <button className="text-calculator-red text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                ÷
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3.5">
              <button className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                7
              </button>
              <button className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                8
              </button>
              <button className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                9
              </button>
              <button className="text-calculator-red text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                ×
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3.5">
              <button className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                4
              </button>
              <button className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                5
              </button>
              <button className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                6
              </button>
              <button className="text-calculator-red text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                -
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3.5">
              <button className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                1
              </button>
              <button className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                2
              </button>
              <button className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                3
              </button>
              <button className="text-calculator-red text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                +
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3.5">
              <button className="h-14 flex items-center justify-center hover:opacity-80 transition">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6c83b1507310274668de23ebd3b21e56e865e33a?width=102"
                  alt="backspace"
                  className="w-12 h-12 object-contain"
                />
              </button>
              <button className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                0
              </button>
              <button className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
                .
              </button>
              <button className="bg-calculator-red text-white text-4xl font-bold h-14 flex items-center justify-center rounded-lg shadow-lg hover:opacity-90 transition">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
