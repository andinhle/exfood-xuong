import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  const [isShow, setShow] = useState<boolean>(false);
  const handlerClick = () => {
    setShow(!isShow);
  };
  return (
    <header className="sticky top-0 bg-white w-full border-b border-base z-40 lg:ps-64 h-16">
      <nav className="bg-white w-full flex lg:justify-end justify-between items-center h-full px-7">
        <div className="border-b border-dotted border-default-200 border-base flex lg:hidden justify-center">
          <Link to={"/"}>
            <img
              src="../../src/assets/images/logo-website-exfood.svg"
              alt="logo-website-exfood"
            />
          </Link>
        </div>
        <div
          className="flex gap-2 cursor-pointer relative"
          onClick={handlerClick}
        >
          <div className="max-w-10 h-10">
            <img
              src="../../../src/assets/images/avatar-default.png"
              className="rounded-full border border-primary"
              alt=""
            />
          </div>
          <div>
            Andinhle
            <span className="text-sm text-[#9b9b9b] block font-[300]">
              Admin
            </span>
          </div>
          {isShow === true ? (
            <ul className="absolute bg-white min-w-[12rem] shadow-lg border rounded-lg top-[100%] p-3 right-0 flex flex-col">
              <li>
                <Link
                  to={"#"}
                  className="py-2 hover:bg-hover px-5 w-full flex items-center text-sm font-[300] tracking-[0.5px] gap-x-2.5 rounded-md"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>{" "}
                  My profile
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="py-2 hover:bg-hover px-5 w-full flex items-center text-sm font-[300] tracking-[0.5px] gap-x-2.5 rounded-md"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>{" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"#"}
                  className="py-2 hover:bg-hover px-5 w-full flex items-center text-sm font-[300] tracking-[0.5px] gap-x-2.5 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  Setting
                </Link>
              </li>
              <div className="border-t border-base mt-4 pt-2">
                <li className="">
                  <Link
                    to={"#"}
                    className="py-2 hover:bg-hover-util text-red-500 px-5 w-full flex items-center text-sm font-[300] tracking-[0.5px] gap-x-2.5 rounded-md"
                  >
                    <svg
                      stroke="#F04A4A"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" x2="9" y1="12" y2="12"></line>
                    </svg>{" "}
                    Logout
                  </Link>
                </li>
              </div>
            </ul>
          ) : (
            ""
          )}
        </div>
      </nav>
    </header>
  );
};

export default HeaderAdmin;
