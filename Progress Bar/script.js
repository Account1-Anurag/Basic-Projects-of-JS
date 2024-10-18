let number = document.getElementById("number");
let circle = document.querySelector("circle");
let counter = 0;
let target = parseInt(
  prompt("Enter the number you want to reach (up to 100):")
);

// Validate that the entered value is a number and within a valid range
if (isNaN(target) || target < 0 || target > 100) {
  alert("Please enter a valid number between 0 and 100.");
} else {
  let intervalid = setInterval(() => {
    if (counter >= target) {
      clearInterval(intervalid);
    } else {
      counter += 1;
      number.innerHTML = counter + "%";
    }
    let dashOffset = 472 - (472 * counter) / 100;
    circle.style.strokeDashoffset = dashOffset;
  }, 30);
}
