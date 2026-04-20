// Dark Mode
document.getElementById("toggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// Typing Effect
const text = "Hi, I'm a Developer 🚀";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 80);
    }
}
type();

// Fake Contact Button
function send() {
    alert("Message Sent Successfully!");
}