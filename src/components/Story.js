export const Story = () => {
  return `
    <div class="animate-fade-in relative">
        <!-- Hero Section -->
        <div class="relative w-full h-[60vh] md:h-[70vh] bg-black">
            <img 
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80" 
                alt="Brand Story" 
                class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
            >
            <div class="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-widest drop-shadow-md">
                    Our Story
                </h1>
                <p class="text-xl md:text-2xl text-gray-200 max-w-2xl font-light tracking-wide">
                    Redefining minimalism for the modern era.
                </p>
            </div>
        </div>

        <!-- Content Section -->
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div class="prose prose-lg md:prose-xl dark:prose-invert mx-auto text-center">
                <p class="text-gray-600 dark:text-neutral-400 leading-relaxed mb-10 text-xl font-light">
                    Founded in 2026, <strong>CEIN.</strong> was born out of a desire to strip away the excess. We believe that true elegance lies in simplicity. Our journey began with a single question: What do we truly need to feel confident, comfortable, and unequivocally ourselves?
                </p>
                
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-16 mb-8 uppercase tracking-wider">
                    The Philosophy
                </h2>
                <p class="text-gray-600 dark:text-neutral-400 leading-relaxed mb-10">
                    We source only the finest sustainable materials, treating every garment as a long-term investment rather than a fleeting trend. Our aesthetic is deeply rooted in timeless silhouettes, neutral palettes, and meticulous craftsmanship. Every piece that leaves our studio is designed to be worn effortlessly day in and day out.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 text-left">
                    <div class="bg-gray-50 dark:bg-neutral-800/50 p-8 rounded-xl border border-gray-100 dark:border-neutral-800">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-widest">Sustainability</h3>
                        <p class="text-gray-600 dark:text-neutral-400 text-sm leading-relaxed">
                            We are committed to ethical production. By partnering with transparent, eco-conscious factories, we ensure our carbon footprint remains as minimal as our aesthetic.
                        </p>
                    </div>
                    <div class="bg-gray-50 dark:bg-neutral-800/50 p-8 rounded-xl border border-gray-100 dark:border-neutral-800">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-widest">Craftsmanship</h3>
                        <p class="text-gray-600 dark:text-neutral-400 text-sm leading-relaxed">
                            It takes time to create simplicity. Our artisans dedicate hours to perfecting the cut, stitching, and finishing of each garment, ensuring unparalleled quality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;
};
