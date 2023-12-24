function makeSnow() {
  const snow = document.createElement("div");
  const size = Math.random() * 4.5 + 3.5;
  snow.className = "snow";
  snow.style.width = size + "px";
  snow.style.height = size + "px";
  snow.style.left = Math.random() * window.innerWidth + "px";
  snow.style.opacity = size / 8;
  if (size < 7) {
    snow.style.zIndex = -5;
  }
  snow.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(snow);
  setTimeout(() => snow.remove(), 5000);
}

setInterval(makeSnow, 40);

// Get the container element
var container = document.getElementById("animatedText");

var order = [
  "m",
  "e1",
  "r1",
  "r2",
  "y",
  "c",
  "h",
  "r1",
  "i",
  "s",
  "t",
  "m",
  "a",
  "s",
];

// Function to apply the jumping effect to characters
function applyJumpEffect() {
  order.forEach(function (char, index) {
    var span = container.querySelector("." + char);
    if (index % 2 === 0) {
      span.style.animationDelay = index * 0.1 + "s";
    } else {
      span.style.animationDelay = (index - 1) * 0.1 + "s";
    }
  });
}
applyJumpEffect();
