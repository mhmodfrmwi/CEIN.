import RoleModel1 from "../assets/model1.jpg";
import RoleModel2 from "../assets/model2.jpg";

export const RoleModels = () => {
  return `
    <div class="max-w-7xl mx-auto py-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div class="relative w-full h-220 overflow-hidden group cursor-pointer shadow-lg">
                <img src="${RoleModel1}" alt="New Arrivals" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                
                <div class="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>

                <div class="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <p class="text-white text-2xl tracking-widest uppercase text-center drop-shadow-md">The Smart Chic</p>
                </div>
            </div>
            <div class="relative w-full h-220 overflow-hidden group cursor-pointer shadow-lg">
                <img src="${RoleModel2}" alt="The Casual Edit" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                
                <div class="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>

                <div class="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <p class="text-white text-2xl  tracking-widest uppercase text-center drop-shadow-md">Ready To Go</p>
                </div>
            </div>
        </div>
    </div>
  `;
};
