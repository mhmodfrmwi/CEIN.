import { journalArticles } from "../data/journalData";

export const Journal = () => {
  return `
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in min-h-[70vh]">
        <div class="mb-16 text-center max-w-3xl mx-auto">
            <h1 class="text-4xl font-bold md:text-5xl text-gray-900 dark:text-white mb-6 uppercase tracking-widest">
                The Journal
            </h1>
            <p class="text-lg text-gray-600 dark:text-neutral-400">
                Stories, style guides, and dispatches from our creative studio. Join us behind the scenes exploring modern aesthetics.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            ${journalArticles.map(article => `
                <article class="group flex flex-col">
                    <a href="#/journal/${article.id}" class="relative w-full aspect-[4/5] overflow-hidden mb-6 bg-gray-100 dark:bg-neutral-800 rounded-lg block cursor-pointer">
                        <img 
                            src="${article.thumbnail}" 
                            alt="${article.title}" 
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        >
                    </a>
                    
                    <div class="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-neutral-400 mb-3">
                        <span>${article.category}</span>
                        <span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-neutral-600"></span>
                        <span>${article.date}</span>
                    </div>

                    <a href="#/journal/${article.id}" class="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:underline block cursor-pointer">
                        ${article.title}
                    </a>

                    <p class="text-gray-600 dark:text-neutral-300 leading-relaxed mb-6 flex-grow">
                        ${article.excerpt}
                    </p>

                    <a href="#/journal/${article.id}" class="inline-flex items-center gap-2 font-semibold text-black dark:text-white group-hover:opacity-70 transition-opacity w-max">
                        Read Story 
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </article>
            `).join('')}
        </div>
    </div>
  `;
};
