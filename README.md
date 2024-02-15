<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Countdown Timer</title>
</head>
<body>
    <div class="countdown-container">
        <h1>Countdown to Your Event</h1>
        <div id="countdown"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>

body {
    font-family: 'Arial', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color:blueviolet
}

.countdown-container {
    text-align: center;
}

#countdown {
    font-size: 2em;
    margin-top: 20px;
    align-items: center;
}

document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');

    // Set the date of your event
    const eventDate = new Date('2024-12-31T23:59:59').getTime();

    setInterval(function () {
        const currentDate = new Date().getTime();
        const timeLeft = eventDate - currentDate;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
});
