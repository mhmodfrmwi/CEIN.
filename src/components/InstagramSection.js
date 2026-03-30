import { InstagramCard } from "./InstagramCard";

export const InstagramSection = (cards) => {
  return `
    <div class="max-w-7xl mx-auto py-16">
      <h3 class="text-3xl text-center mb-12">Shop Instagram</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        ${cards.map((card) => InstagramCard(card)).join("")}
      </div>
    </div>
  `;
};
