// components/Hero.js
import HeroBackground from "../assets/hero-bg2.jpg";

export const Hero = () => {
  return `
    <div class="w-full h-160 flex items-end bg-cover bg-center bg-no-repeat relative" style="background-image: url('${HeroBackground}');">
      
      <div class="absolute inset-0 bg-black/40"></div>
      
      <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex flex-col items-start">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl text-white text-start drop-shadow-lg leading-tight">
            Elevate Your Style.<br/> Timeless Fashion, Sustainable<br/>
            Choices 
        </h1>
        <button class="py-3 px-8 mb-14 items-center gap-x-2 text-sm  border border-transparent bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none shadow-md">
          Shop Now
        </button>
      </div>
    </div>
  `;
};
