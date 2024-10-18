let lists = document.getElementsByClassName("list");
let right = document.getElementById("right");
let left = document.getElementById("left");
let selected = null;  // Persist the selected element

// Add dragstart event to each list item
for (let list of lists) {
    list.addEventListener("dragstart", function (e) {
        selected = e.target;  // Set the selected item
    });
}

// Allow right div to accept dragged items
right.addEventListener("dragover", function (e) {
    e.preventDefault();  // Prevent default behavior to allow drop
});

// Handle drop in the right div
right.addEventListener("drop", function (e) {
    if (selected) {
        right.appendChild(selected);
        selected = null;  // Clear the selection after drop
    }
});

// Allow left div to accept dragged items
left.addEventListener("dragover", function (e) {
    e.preventDefault();  // Prevent default behavior to allow drop
});

// Handle drop in the left div
left.addEventListener("drop", function (e) {
    if (selected) {
        left.appendChild(selected);
        selected = null;  // Clear the selection after drop
    }
});
