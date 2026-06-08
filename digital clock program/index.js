function updateclock(params) {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const Seconds = date.getSeconds();
    const timestring = `${hours}:${minutes}:${Seconds}`;
    document.getElementById("clock").textContent = timestring;
}


setInterval(updateclock,1000);