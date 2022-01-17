// import Vimeo from "@vimeo/player";

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

player.on('play', function () {
    const currentTime = localStorage.getItem("videoplayer-current-time");
    
    player.setCurrentTime(currentTime);
});
    
    // player.data = parsedData;
    // console.log(player.data);
        
    console.log('played the video!');
    player.on('timeupdate', function (data) {
            
            console.log(data);  
        localStorage.setItem("videoplayer-current-time", data.seconds);
        console.log(data.seconds); 
        }
    );

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    
// player.getCurrentTime().then(function (seconds) {
//        console.log('seconds:', seconds);
//     // seconds = the current playback position
// }).catch(function(error) {
//     // an error occurred
// }); 
// player.addEventListener('timeupdate', getEventCurrentTime);

// function getEventCurrentTime(e) {
//     console.log(e.player.)
    
// }
