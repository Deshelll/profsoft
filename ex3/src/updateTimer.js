function updateLastUpdatedTime() {
    
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("lastUpdated").textContent = "Updated: " + timeString;
}
updateLastUpdatedTime();
setInterval(updateLastUpdatedTime, 60000);