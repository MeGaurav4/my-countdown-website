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
