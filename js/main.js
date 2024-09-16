const animationType = document.getElementById("article");
const contentTitle =
  "Everyone will seek comfort in a city and also seek the beauty of the city. Living happily and peacefully in a city is everyone's dream. Therefore, this website will display the beauty of cities from all over the world.";
let charIndex = 0;

// typing animation
const typeChar = () => {
  animationType.textContent += contentTitle[charIndex];
  charIndex++;

  if (charIndex < contentTitle.length) {
    setTimeout(typeChar, 50);
  }
};
typeChar();
