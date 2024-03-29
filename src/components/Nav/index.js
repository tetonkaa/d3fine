import "./main.css";
import { useNavigate } from "react-router-dom";






export default function DefaultNavbar(props) {

  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload("/");
  };
  return (
    <>
      <nav class="bg-white navStyle dark:bg-gray-900 relative w-full z-20 top-0 left-0  border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center">
            <span class={`self-center text-6xl whitespace-nowrap animaTitle ${ props.darkMode ?  "darkModeTitle" : ""}`}>
              d3fine
            </span>
          </a>
          <div class="flex md:order-2">
            {!props.user ? (
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                type="button"
                class={`${props.darkMode ? "inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400" : "inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-black rounded-lg border border-black hover:bg-gray-100 focus:ring-4 focus:ring-gray-400" } `}
              >
                Get Started
              </button>
            ) : (
              <button
                onClick={() => handleLogout()}
                type="button"
                class="boldThing text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                Logout
              </button>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="navItemsContainer items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white-500/25 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  class={`navItems block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500 " ${ props.darkMode ?  "text-white" : "text-black"} `}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              {props.user ? (
                <li>
                  <a
                    href="/profile"
                    class={`navItems block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${ props.darkMode ?  "text-white" : "text-black"} `}
                  >
                    Profile
                  </a>
                </li>
              ) : null}
              {props.user ? (
                <li>
                  <a
                    href="/create"
                    class={`navItems block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${ props.darkMode ?  "text-white" : "text-black"} `}
                  >
                    Create
                  </a>
                </li>
              ) : null}
              <li>
                <a
                  href="/explore"
                  class={`navItems block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${ props.darkMode ?  "text-white" : "text-black"}`}
                >
                  Explore
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
