const para = document.getElementById('paragraph');

function showPosition() {
    navigator.geolocation.getCurrentPosition(function(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        para.innerHTML = `Latitude: ${latitude} and Longitude: ${longitude}`;
    })
}