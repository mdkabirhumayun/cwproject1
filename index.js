// TYPNG ANIMATION







let arr=[]
// Get a reference to the container element
let template= document.getElementById("template");

// Loop to create and append 328 div elements
for (let i = 1; i <= 328; i++) {
  // Create a new div element
  let newDiv = document.createElement("div");
  const randomColor = getRandomColor();
  newDiv.style.backgroundColor = randomColor;
  newDiv.textContent = "hi" + i;
  template.appendChild(newDiv);
}
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let j = 0; j < 6; j++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
