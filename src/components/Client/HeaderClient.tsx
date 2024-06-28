import { Link } from "react-router-dom";

const HeaderClient = () => {
  return (
    <header className="bg-white/50 shadow py-2 backdrop-blur sticky top-0">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <img
            src="../../../src/assets/images/logo-website-exfood.svg"
            alt=""
          />
        </div>
        <nav>
          <ul className="flex gap-10">
            <li>
              <Link to={"/"} className="text-primary text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/foods"} className=" text-lg">Foods</Link>
            </li>
            <li>
              <Link to={"/services"} className=" text-lg">Services</Link>
            </li>
            <li>
              <Link to={"/reviews"} className=" text-lg">Reviews</Link>
            </li>
            <li>
              <Link to={"/contact"} className=" text-lg">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="bg-primary text-white rounded-full text-xs px-1 absolute -top-1 -right-1">
              0
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default HeaderClient;
