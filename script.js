const timerElement = document.getElementById("timer");

function formatTwoDigits(number) {
    return number < 10 ? `0${number}` : `${number}`;
}

function updateTimer() {
    const now = new Date();
    const day = formatTwoDigits(now.getDate());
    const month = formatTwoDigits(now.getMonth() + 1); // Months are zero-based
    const year = now.getFullYear();
    const hours = formatTwoDigits(now.getHours());
    const minutes = formatTwoDigits(now.getMinutes());
    const seconds = formatTwoDigits(now.getSeconds());

    timerElement.textContent = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
}

setInterval(updateTimer, 1000);
updateTimer();
