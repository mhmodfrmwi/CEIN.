export const InstagramCard = ({ image, link }) => {
  return `
    <a href="${link}" target="_blank" class="relative aspect-square w-full overflow-hidden group block">
        
        <img 
          src="${image}" 
          alt="Instagram Post" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        >
        
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            
            <svg class="w-10 h-10 text-white drop-shadow-md transform scale-50 group-hover:scale-100 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.5 3H7.5C5.01472 3 3 5.01472 3 7.5V16.5C3 18.9853 5.01472 21 7.5 21H16.5C18.9853 21 21 18.9853 21 16.5V7.5C21 5.01472 18.9853 3 16.5 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.875 8.0625C17.3928 8.0625 17.8125 7.64277 17.8125 7.125C17.8125 6.60723 17.3928 6.1875 16.875 6.1875C16.3572 6.1875 15.9375 6.60723 15.9375 7.125C15.9375 7.64277 16.3572 8.0625 16.875 8.0625Z" fill="currentColor"/>
            </svg>

        </div>
    </a>
  `;
};
