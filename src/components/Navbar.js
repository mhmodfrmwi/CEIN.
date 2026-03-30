import MagnifyingGlass from "../assets/MagnifyingGlass.svg";
import Heart from "../assets/Heart.svg";
import Bag from "../assets/Bag.svg";
import UserCircle from "../assets/UserCircle.svg";
export const Navbar = () => {
  return `
    <header
        class="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full py-3 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800"
      >
        <nav
          class="max-w-340 w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        >
          <div class="flex items-center justify-between">
            <a
              class="flex-none text-4xl font-bold text-gray-900 dark:text-white focus:outline-hidden focus:opacity-80"
              href="#"
              aria-label="Brand"
            >
              CEIN.
            </a>
            <div class="sm:hidden">
              <button
                type="button"
                class="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-gray-800 dark:text-neutral-200 shadow-2xs hover:bg-gray-50 dark:hover:bg-neutral-700 focus:outline-hidden focus:bg-gray-100 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none"
                id="hs-navbar-example-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-example"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-example"
              >
                <svg
                  class="hs-collapse-open:hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  class="hs-collapse-open:block hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span class="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
          <div
            id="hs-navbar-example"
            class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
            aria-labelledby="hs-navbar-example-collapse"
            role="region"
          >
            <div
              class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5"
            >
              <a
                class="font-medium text-gray-900 dark:text-white focus:outline-hidden"
                href="#"
                aria-current="page"
                >Shop</a
              >
              <a
                class="text-sm text-gray-600 dark:text-neutral-400 hover:text-black dark:hover:text-white focus:outline-hidden focus:text-black dark:focus:text-white"
                href="#"
                >New Arrivals</a
              >
              <a
                class="text-sm text-gray-600 dark:text-neutral-400 hover:text-black dark:hover:text-white focus:outline-hidden focus:text-black dark:focus:text-white"
                href="#"
                >Sales</a
              >
              <a
                class="text-sm text-gray-600 dark:text-neutral-400 hover:text-black dark:hover:text-white focus:outline-hidden focus:text-black dark:focus:text-white"
                href="#"
                >Journel</a
              >
            </div>
          </div>
          <div class="hidden w-full sm:flex sm:items-center sm:justify-end gap-x-4">
            <a
                class="text-sm text-gray-600 dark:text-neutral-400 hover:text-black dark:hover:text-white focus:outline-hidden focus:text-black dark:focus:text-white"
                href="#"
                >
                   <img
                    src="${MagnifyingGlass}"
                    alt="User Avatar"
                    class="rounded-full w-6 h-6 object-cover dark:invert"
                  />
                </a
              >
            <a
                class="text-sm text-gray-600 dark:text-neutral-400 hover:text-black dark:hover:text-white focus:outline-hidden focus:text-black dark:focus:text-white"
                href="#"
                >
                   Stories
                </a
              >
            <a
                class="flex text-sm text-gray-600 dark:text-neutral-400 hover:text-black dark:hover:text-white focus:outline-hidden focus:text-black dark:focus:text-white items-center"
                href="#"
                >
                   <img
                    src="${Heart}"
                    alt="User Avatar"
                    class="rounded-full w-6 h-6 object-cover dark:invert"
                  />
                  <p class=" text-black dark:text-white dark:bg-black rounded-full w-5 h-5 flex items-center justify-center">0</p>
                </a
              >
            <a
                class="flex text-sm text-gray-600 dark:text-neutral-400 hover:text-black dark:hover:text-white focus:outline-hidden focus:text-black dark:focus:text-white items-center"
                href="#"
                >
                   <img
                    src="${Bag}"
                    alt="User Avatar"
                    class="rounded-full w-6 h-6 object-cover dark:invert"
                  />
                  <p class=" text-black dark:text-white dark:bg-black rounded-full w-5 h-5 flex items-center justify-center">0</p>
                </a
              >
            <a
                class="text-sm text-gray-600 dark:text-neutral-400 hover:text-black dark:hover:text-white focus:outline-hidden focus:text-black dark:focus:text-white"
                href="#"
                >
                   <img
                    src="${UserCircle}"
                    alt="User Avatar"
                    class="rounded-full w-6 h-6 object-cover dark:invert"
                  />
                </a
              >
          </div>
        </nav>
      </header>
  `;
};
