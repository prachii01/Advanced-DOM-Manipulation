// Select "Item 2"
const item2 = document.getElementById("item2");

// Add event listener for click event
item2.addEventListener("click", function () {
    // Get parent element (UL) and alert its text content
    const parentElement = item2.parentNode;
    alert("Parent Content: " + parentElement.textContent.trim());

    // Get previous and next sibling elements
    const prevSibling = item2.previousElementSibling;
    const nextSibling = item2.nextElementSibling;

    // Log their text content if they exist
    if (prevSibling) {
        console.log("Previous Sibling: " + prevSibling.textContent);
    } else {
        console.log("No previous sibling.");
    }

    if (nextSibling) {
        console.log("Next Sibling: " + nextSibling.textContent);
    } else {
        console.log("No next sibling.");
    }
});
