export const JournalStory = (article) => {
  if (!article) {
    return `<div class="max-w-7xl mx-auto py-32 px-4 text-center">
      <h2 class="text-3xl font-bold dark:text-white mb-6">Article not found</h2>
      <a href="#/journal" class="inline-block px-8 py-3 bg-black text-white hover:bg-neutral-800 transition-colors duration-300 font-semibold dark:bg-white dark:text-black dark:hover:bg-neutral-200">Return to Journal</a>
    </div>`;
  }

  return `
    <article class="animate-fade-in relative min-h-screen">
      <!-- Story Hero -->
      <div class="relative w-full h-[50vh] md:h-[65vh] bg-black">
          <img 
              src="${article.image}" 
              alt="${article.title}" 
              class="absolute inset-0 w-full h-full object-cover opacity-70"
          >
          <div class="absolute inset-0 flex flex-col items-center justify-end pb-16 px-4 text-center bg-gradient-to-t from-black/80 to-transparent">
              <div class="flex items-center gap-4 text-sm font-semibold uppercase tracking-widest text-white/80 mb-6 drop-shadow">
                  <span>${article.category}</span>
                  <span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>
                  <span>${article.date}</span>
              </div>
              <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl tracking-tight drop-shadow-lg leading-tight">
                  ${article.title}
              </h1>
          </div>
      </div>

      <!-- Story Body -->
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <a href="#/journal" class="inline-block text-sm font-medium border-b border-gray-800 text-gray-800 hover:text-black dark:text-gray-300 dark:border-gray-300 dark:hover:text-white transition-colors duration-300 pb-1 mb-12">
            &larr; Back to Journal
          </a>

          <div class="prose prose-lg md:prose-xl dark:prose-invert text-gray-800 dark:text-neutral-300 leading-relaxed font-serif">
              <p class="text-xl md:text-2xl font-medium leading-relaxed text-gray-900 dark:text-white mb-10 pb-10 border-b border-gray-200 dark:border-neutral-800">
                  ${article.excerpt}
              </p>
              
              <div class="article-content">
                  ${article.content}
              </div>
          </div>
          
          <div class="mt-20 pt-10 border-t border-gray-200 dark:border-neutral-800 flex justify-center">
              <p class="text-gray-500 uppercase tracking-widest text-sm font-semibold">End of Article</p>
          </div>
      </div>
    </article>
  `;
};
