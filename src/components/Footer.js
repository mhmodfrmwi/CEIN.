export const Footer = () => {
  return `
    <footer class="bg-gray-50 border-t border-gray-200 dark:bg-neutral-900 dark:border-neutral-800">
      <div class="max-w-340 py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          
          <div class="text-center md:text-start">
            <h3 class="text-xs font-semibold text-gray-900 uppercase tracking-wider dark:text-white mb-4">Contact Us</h3>
            <div class="mt-3 space-y-3">
              <p class="text-sm text-gray-600 dark:text-neutral-400">123 Fashion Street, Style City, Country</p>
              <p class="text-sm text-gray-600 dark:text-neutral-400 font-medium">Email: <a href="mailto:info@cein.com" class="hover:text-black transition-colors">info@cein.com</a></p>
              <p class="text-sm text-gray-600 dark:text-neutral-400">Phone: +123 456 7890</p>
            </div>
          </div>

          <div class="text-center md:text-start">
            <h3 class="text-xs font-semibold text-gray-900 uppercase tracking-wider dark:text-white mb-4">Customers</h3>
            <ul class="mt-3 space-y-3">
              <li><a class="text-sm text-gray-600 hover:text-black transition-colors dark:text-neutral-400 dark:hover:text-white" href="#">Start a Return</a></li>
              <li><a class="text-sm text-gray-600 hover:text-black transition-colors dark:text-neutral-400 dark:hover:text-white" href="#">Return Policy</a></li>
              <li><a class="text-sm text-gray-600 hover:text-black transition-colors dark:text-neutral-400 dark:hover:text-white" href="#">FAQ</a></li>
              <li><a class="text-sm text-gray-600 hover:text-black transition-colors dark:text-neutral-400 dark:hover:text-white" href="#">Catalogs and Mailers</a></li>
            </ul>
          </div>

          <div class="text-center md:text-start">
            <h3 class="text-xs font-semibold text-gray-900 uppercase tracking-wider dark:text-white mb-4">About Us</h3>
            <ul class="mt-3 space-y-3">
              <li><a class="text-sm text-gray-600 hover:text-black transition-colors dark:text-neutral-400 dark:hover:text-white" href="#">Sustainability</a></li>
              <li><a class="text-sm text-gray-600 hover:text-black transition-colors dark:text-neutral-400 dark:hover:text-white" href="#">Careers</a></li>
              <li><a class="text-sm text-gray-600 hover:text-black transition-colors dark:text-neutral-400 dark:hover:text-white" href="#">Privacy Policy</a></li>
              <li><a class="text-sm text-gray-600 hover:text-black transition-colors dark:text-neutral-400 dark:hover:text-white" href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div class="text-center md:text-start">
            <h3 class="text-xs font-semibold text-gray-900 uppercase tracking-wider dark:text-white mb-4">Get The Latest</h3>
            <form class="mt-4">
              <div class="flex flex-col gap-2">
                <input type="email" placeholder="Your email" class="w-full py-2 px-3 border border-gray-200 rounded-lg text-sm focus:border-black focus:ring-black disabled:opacity-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                <p class="mt-3 text-xs text-gray-500 dark:text-neutral-500">
                  By signing up, you agree to our <a class="text-black hover:underline" href="#">Privacy Policy</a> and <a class="text-black hover:underline" href="#">Terms of Service</a>.
                </p>
                <button type="submit" class="w-30 py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black text-white hover:bg-gray-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="pt-8 border-t border-gray-200 dark:border-neutral-800 text-center">
          <p class="text-sm text-gray-500 dark:text-neutral-500">
            &copy; 2026 CEIN Store. All rights reserved. Built by Mahmoud.
          </p>
        </div>
      </div>
    </footer>
  `;
};
