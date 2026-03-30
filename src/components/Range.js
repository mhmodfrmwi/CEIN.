import RangePic1 from "../assets/range1.jpg";
import RangePic2 from "../assets/range2.jpg";
import RangePic3 from "../assets/range3.jpg";

export const Range = () => {
  return `
        <div class="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            <p class="text-lg text-gray-800 sm:text-xl dark:text-white text-start max-w-3xl">
                Elevate your lifestyle with a more intelligent, superior wardrobe.</br> Our range is crafted sustainably with longevity in mind.        
            </p>
            <div class="cards flex flex-col sm:flex-row gap-6 justify-center sm:justify-between">
                <div class="relative w-full sm:w-1/4 h-96 overflow-hidden group cursor-pointer">
                    <img src=${RangePic1} alt="New Arrivals" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <p class="text-white text-sm font-semibold tracking-wider uppercase text-center">New Arrivals</p>
                    </div>
                </div>
                <div class="relative w-full sm:w-1/4 h-96 overflow-hidden group cursor-pointer">
                    <img src=${RangePic2} alt="The Casual Edit" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <p class="text-white text-sm font-semibold tracking-wider uppercase text-center">The Casual Edit</p>
                    </div>
                </div>
                <div class="relative w-full sm:w-1/4 h-96 overflow-hidden group cursor-pointer">
                    <img src=${RangePic3} alt="Best Sellers" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <p class="text-white text-sm font-semibold tracking-wider uppercase text-center">Best Sellers</p>
                    </div>
                </div>
            </div>
        </div>
    `;
};
