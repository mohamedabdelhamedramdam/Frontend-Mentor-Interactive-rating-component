// Select necessary DOM elements for interaction
const front = document.querySelector('.front');
const back  = document.querySelector('.back');
const card  = document.querySelector('.flip-card-inner');
const btn   = document.querySelector('.btn');
const li    = document.querySelectorAll('li');
const span  =document.querySelector('.rating-content');

// Add event listeners to each list item for selecting a rating
li.forEach((item, index) => {
    // Handle click event to highlight selected rating
    item.addEventListener('click', () => {
        // Remove highlight from all items
        li.forEach(element => element.classList.remove('orange-Bc'));
        // Add highlight to the selected item
        item.classList.add('orange-Bc');
        // Add rating based on user choice
        span.innerText=`You selected ${index+1} out of 5`;
    });
    // Set tabindex for keyboard accessibility
    item.tabIndex = index;
    // Set role for screen readers
    item.setAttribute('role', 'button');
});

// Helper function to check if any element in the list has a specific class
function hasSpecificClass(elements, className) {
    return Array.from(elements).some(item => item.classList.contains(className));
}

// Add event listener to the submit button
btn.addEventListener("click", () => {
    // Check if any rating is selected
    if (hasSpecificClass(li, 'orange-Bc')) {
        // Hide the front view and show the back view
        front.classList.add('hidden');
        back.classList.remove('hidden');
        // Add flip animation to the card
        card.classList.add("flip");
    } else {
        // Change button text to prompt user to select a rating
        btn.innerText = 'Please select a rate first!';
    }
});
