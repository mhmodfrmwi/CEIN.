// components/Hero.js
import HeroBackground from "../assets/hero-bg.jpg";
export const Hero = () => {
  return `
    <div class="w-full bg-[url(${HeroBackground})] bg-cover bg-center bg-no-repeat relative">
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="relative max-w-340 mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-8 flex flex-col items-start">
        <h1 class="text-xl text-white sm:text-xl text-start drop-shadow-lg">
            Elevate<br/>
            Your Style Timeless Fashion, Sustainable 
            </br>Choices 
        </h1>
        <button class="py-3 px-8 items-center gap-x-2 text-sm border border-transparent bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none shadow-md">
          Shop Now
        </button>
      </div>
    </div>
  `;
};
