import { Link, NavLink, Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/Admin/HeaderAdmin";
// import { RiDashboardLine } from "@remixicon/react"
const AdminLayout = () => {
  return (
    <>
      <HeaderAdmin />
      <div className="fixed z-50 bg-white top-0 hidden lg:flex">
        <div className="side-bar min-w-[255px] max-w-[255px] w-full border-r border-base h-screen">
          <div className="border-b border-dotted border-default-200 border-base flex justify-center">
            <Link to={"/"}>
              <img
                src="../../../src/assets/images/logo-website-exfood.svg"
                alt="logo-website-exfood"
              />
            </Link>
          </div>
          <nav className="nav-left p-4 lg:flex flex-col justify-between h-[90%]">
            <div>
              <ul className="flex flex-col gap-1.5 max-h-[350px] overflow-y-scroll nav-left-control">
                <li>
                  <NavLink
                    to={"/admin"}
                    end
                    className={
                      "flex items-center font-[300] text-sm tracking-[0.5px] gap-x-3.5 hover:bg-hover py-3 px-4 rounded-md"
                    }
                  >
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
                        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      />
                    </svg>
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"categorys"}
                    className={
                      "flex items-center font-[300] text-sm tracking-[0.5px] gap-x-3.5 hover:bg-hover py-3 px-4 rounded-md"
                    }
                  >
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
                        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                    Danh mục
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"foods"}
                    className={
                      "flex items-center font-[300] text-sm tracking-[0.5px] gap-x-3.5 hover:bg-hover py-3 px-4 rounded-md"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path d="M8 1.5C8 0.947715 7.55228 0.5 7 0.5C6.44772 0.5 6 0.947715 6 1.5V2.5C6 2.50686 6.00042 2.51285 6.00081 2.51843C6.00385 2.56193 6.00516 2.58063 5.79289 2.79289L5.77277 2.81298C5.50599 3.07912 5 3.58391 5 4.5V5.5C5 6.05228 5.44772 6.5 6 6.5C6.55228 6.5 7 6.05228 7 5.5V4.5C7 4.49314 6.99958 4.48715 6.99919 4.48157C6.99615 4.43807 6.99484 4.41937 7.20711 4.20711L7.22723 4.18702C7.49401 3.92088 8 3.41609 8 2.5V1.5ZM19 1.5C19 0.947715 18.5523 0.5 18 0.5C17.4477 0.5 17 0.947715 17 1.5V2.5C17 2.50686 17.0004 2.51285 17.0008 2.51843C17.0038 2.56193 17.0052 2.58063 16.7929 2.79289L16.7728 2.81298C16.506 3.07912 16 3.58391 16 4.5V5.5C16 6.05228 16.4477 6.5 17 6.5C17.5523 6.5 18 6.05228 18 5.5V4.5C18 4.49314 17.9996 4.48715 17.9992 4.48157C17.9962 4.43807 17.9948 4.41937 18.2071 4.20711L18.2272 4.18702C18.494 3.92088 19 3.41609 19 2.5V1.5ZM12.5 0.5C13.0523 0.5 13.5 0.947715 13.5 1.5V2.5C13.5 3.41609 12.994 3.92088 12.7272 4.18702L12.7071 4.20711C12.4948 4.41937 12.4962 4.43807 12.4992 4.48157C12.4996 4.48715 12.5 4.49314 12.5 4.5V5.5C12.5 6.05228 12.0523 6.5 11.5 6.5C10.9477 6.5 10.5 6.05228 10.5 5.5V4.5C10.5 3.58391 11.006 3.07912 11.2728 2.81298L11.2929 2.79289C11.5052 2.58063 11.5038 2.56193 11.5008 2.51843C11.5004 2.51285 11.5 2.50686 11.5 2.5V1.5C11.5 0.947715 11.9477 0.5 12.5 0.5ZM4 10H20C20 14.4183 16.4183 18 12 18C7.58172 18 4 14.4183 4 10ZM3 8C2.44772 8 2 8.44771 2 9V10C2 14.1006 4.46819 17.6248 8 19.1679V20C8 20.5523 8.44772 21 9 21H15C15.5523 21 16 20.5523 16 20V19.1679C19.5318 17.6248 22 14.1006 22 10V9C22 8.44772 21.5523 8 21 8H3Z"></path>
                    </svg>
                    Foods
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/#"}
                    className={
                      "flex items-center font-[300] text-sm tracking-[0.5px] gap-x-3.5 hover:bg-hover py-3 px-4 rounded-md"
                    }
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="10" x2="21" y1="6" y2="6"></line>
                      <line x1="10" x2="21" y1="12" y2="12"></line>
                      <line x1="10" x2="21" y1="18" y2="18"></line>
                      <path d="M4 6h1v4"></path>
                      <path d="M4 10h2"></path>
                      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
                    </svg>{" "}
                    Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/#"}
                    className={
                      "flex items-center font-[300] text-sm tracking-[0.5px] gap-x-3.5 hover:bg-hover py-3 px-4 rounded-md"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                      />
                    </svg>
                    Users
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <NavLink
                    to={"/#"}
                    className={
                      "flex items-center font-[300] text-sm tracking-[0.5px] gap-x-3.5 hover:bg-hover py-3 px-4 rounded-md"
                    }
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 20a6 6 0 0 0-12 0"></path>
                      <circle cx="12" cy="10" r="4"></circle>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/#"}
                    className={
                      "flex items-center text-red-500 font-[300] text-sm tracking-[0.5px] gap-x-3.5 hover:bg-hover-util py-3 px-4 rounded-md"
                    }
                  >
                    <svg
                      stroke="#F04A4A"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" x2="9" y1="12" y2="12"></line>
                    </svg>
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="lg:ps-64">
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
