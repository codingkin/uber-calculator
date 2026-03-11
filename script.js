function updateClock() {
    const timeZones = {
        "UTC": 0,
        "GMT+1": 1,
        "GMT+2": 2,
        "GMT-1": -1,
        "GMT-5": -5,
        "GMT+5": 5,
        "GMT+8": 8,
        "GMT-8": -8
    };

    const clocks = document.getElementById('clocks');
    clocks.innerHTML = '';

    for (const [zone, offset] of Object.entries(timeZones)) {
        const now = new Date(new Date().getTime() + (offset * 60 * 60 * 1000));
        const formattedTime = now.toUTCString().split(' ')[5];
        const clockDiv = document.createElement('div');
        clockDiv.textContent = `${zone}: ${formattedTime}`;
        clocks.appendChild(clockDiv);
    }
}

setInterval(updateClock, 1000); // Update clocks every second

window.onload = updateClock; // Initial call
