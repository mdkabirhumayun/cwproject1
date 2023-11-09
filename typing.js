const textToType = [
    "How can we support remote teams?",
    "Is the data I’m collecting secure?",
    "How do customers feel about our safety protocols?",
    "Are my employees ready to return to the office?",
    "Can I automate COVID-19 symptom tracking?",
    "Is the data I’m collecting secure?"
];

const typingContainer = document.getElementById("typing-container");
let lineIndex = textToType.length - 1; // Start with the last line
let charIndex = textToType[lineIndex].length;
let isErasing = true;

function typeText() {
    if (lineIndex >= 0) {
        if (isErasing) {
            if (charIndex > 0) {
                typingContainer.textContent = textToType[lineIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeText, 50);
            } else {
                isErasing = false;
                setTimeout(typeText, 1000); // Delay before typing
            }
        } else {
            if (charIndex < textToType[lineIndex].length) {
                typingContainer.textContent += textToType[lineIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 50);
            } else {
                isErasing = true;
                lineIndex--;
                charIndex = textToType[lineIndex].length;
                typingContainer.textContent += '\n';
                setTimeout(typeText, 1000); // Delay before erasing
            }
        }
    }
}

typeText();

