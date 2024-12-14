


const previewButton = document.getElementById('showMessage');

    // Get the lower section
const lowerSection = document.querySelector('.lower-section');

    // Event listener for the Preview button
previewButton.addEventListener('click', () => {
    // Change the background image to a new one when the button is clicked
    lowerSection.style.backgroundImage = "url('2025.jpg')";
    
    // Set a delay of 2 seconds (2000ms) before displaying the alert
    setTimeout(() => {
        alert("Hello New Year!");
    }, 200);

    setTimeout(() => {
        lowerSection.style.backgroundImage = "url('output.jpg')";
    }, 200);
});

function updateCountdown() {
    let now = new Date();
    const newYear = new Date("January 1, 2025 00:00:00").getTime();
    let timeLeft = newYear - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
}

setInterval(updateCountdown, 1000);
