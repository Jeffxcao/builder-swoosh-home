import { Calculator } from "../components/Calculator";

export default function Index() {
  return (
    <div className="min-h-screen bg-calculator-bg relative overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Calculator */}
          <div className="w-full max-w-sm lg:max-w-md flex-shrink-0">
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
              <Calculator />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left relative">
            {/* Builder.io Logo - Top Right */}
            <div className="absolute -top-12 right-0 hidden lg:block">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/914ad0af17c9d50dae779aa1496fc38c47aaabe0?width=354"
                alt="Builder.io logo"
                className="w-44 h-auto"
              />
            </div>

            {/* Cursor Edition Badge */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white">Cursor Edition IV</h2>
            </div>

            <div className="mb-8 flex items-center justify-center lg:justify-start gap-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8767b0be0cbc9e9fb53fd4c0e46c6ca52b4ebe97?width=112"
                alt="Figma icon"
                className="w-14 h-auto"
              />
              <svg
                width="68"
                height="30"
                viewBox="0 0 68 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-auto"
              >
                <path
                  d="M2 13C0.89543 13 0 13.8954 0 15C0 16.1046 0.89543 17 2 17V13ZM67.4142 16.4142C68.1953 15.6332 68.1953 14.3668 67.4142 13.5858L54.6863 0.857864C53.9052 0.0768156 52.6389 0.0768156 51.8579 0.857864C51.0768 1.63891 51.0768 2.90524 51.8579 3.68629L63.1716 15L51.8579 26.3137C51.0768 27.0948 51.0768 28.3611 51.8579 29.1421C52.6389 29.9232 53.9052 29.9232 54.6863 29.1421L67.4142 16.4142ZM2 17H66V13H2V17Z"
                  fill="white"
                />
              </svg>
              <svg
                width="80"
                height="72"
                viewBox="0 0 80 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-auto"
              >
                <path
                  d="M20.5 20.5L5 36L20.5 51.5M59.25 20.5L74.75 36L59.25 51.5M47.625 5L32.125 67"
                  stroke="#AC7FF4"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
              <span className="text-calculator-red">Calc</span>
              <span className="text-[#2E9896]">ulator</span>
              <br />
              <span className="text-[#2E9896]">Design to c</span>
              <span className="text-calculator-red">ode</span>
            </h1>

            <p className="text-calculator-text-light text-lg sm:text-xl font-light max-w-lg mx-auto lg:mx-0">
              A companion Figma resource for the Builder.io{" "}
              <a
                href="https://www.builder.io/c/docs/design-to-code"
                className="underline hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Design to Code guide.
              </a>
            </p>

            {/* Builder.io Logo - Mobile */}
            <div className="mt-8 lg:hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/914ad0af17c9d50dae779aa1496fc38c47aaabe0?width=354"
                alt="Builder.io logo"
                className="w-44 h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 6.25%, rgba(0, 0, 0, 0.02) 12.5%, rgba(0, 0, 0, 0.04) 18.75%, rgba(0, 0, 0, 0.06) 25%, rgba(0, 0, 0, 0.10) 31.25%, rgba(0, 0, 0, 0.14) 37.5%, rgba(0, 0, 0, 0.19) 43.75%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.32) 56.25%, rgba(0, 0, 0, 0.39) 62.5%, rgba(0, 0, 0, 0.47) 68.75%, rgba(0, 0, 0, 0.56) 75%, rgba(0, 0, 0, 0.66) 81.25%, rgba(0, 0, 0, 0.77) 87.5%, rgba(0, 0, 0, 0.88) 93.75%, #000 100%)",
        }}
      />
    </div>
  );
}
