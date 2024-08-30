document.addEventListener('DOMContentLoaded', () => {
  // Function to handle the "Show More" button functionality
  const setupShowMore = (btnId, collId) => {
      const showMoreBtn = document.getElementById(btnId);
      const hiddenProducts = document.querySelectorAll(`#${collId} .hidden`);
      let currentIndex = 0;
      const increment = 4; // Number of products to show at a time

      showMoreBtn.addEventListener('click', () => {
          // Reveal the next set of hidden products
          for (let i = currentIndex; i < currentIndex + increment && i < hiddenProducts.length; i++) {
              hiddenProducts[i].classList.remove('hidden');
          }
          currentIndex += increment;

          // Check if there are more products to show
          if (currentIndex >= hiddenProducts.length) {
              showMoreBtn.style.display = 'none';
          } else {
              // Move the button below the newly shown products
              showMoreBtn.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }
      });
  };

  // Setup "Show More" functionality for Men's section
  setupShowMore('show-more-btn-men', 'men-coll');

  // Setup "Show More" functionality for Women's section
  setupShowMore('show-more-btn-women', 'women-coll');
  setupShowMore('show-more-btn-kids', 'kids-coll');
});




