export const videoPlayerInit = () => {

// video-player
// video-button__play
// video-button__stop
// video-time__passed
// video-progress
// video-time__total

   const videoPlayer = document.querySelector('.video-player');
   const videoButtonPlay = document.querySelector('.video-button__play');
   const videoButtonStop = document.querySelector('.video-button__stop');
   const videoProgress = document.querySelector('.video-progress');
   const videoTimePassed = document.querySelector('.video-time__passed');
   const videoTimeTotal = document.querySelector('.video-time__total');
   const videoFullscreen = document.querySelector('.video-fullscreen');
   const videoVolume = document.querySelector('.video-volume');


   console.dir(videoPlayer);

   const toggleIcon = () => {

      if (videoPlayer.paused){

         videoButtonPlay.classList.add('fa-play');
         videoButtonPlay.classList.remove('fa-pause');

      } else {

         videoButtonPlay.classList.remove('fa-play');
         videoButtonPlay.classList.add('fa-pause');

      }
   };


   const togglePlay = () => {

      if (videoPlayer.paused) {

         videoPlayer.play();
         
      } else {

         videoPlayer.pause();

      }

      //toggleIcon();
   }


   const stopPlay = () => {

      videoPlayer.pause();
      videoPlayer.currentTime = 0;



   }


   const addZero = n => n<10 ? '0' + n : n;


   videoFullscreen.addEventListener('click', () => {

      videoPlayer.requestFullscreen();

   })


   videoPlayer.addEventListener('click' , togglePlay);
   videoButtonPlay.addEventListener('click' , togglePlay);

   videoPlayer.addEventListener('play',toggleIcon);
   videoPlayer.addEventListener('pause',toggleIcon);

   videoButtonStop.addEventListener('click', stopPlay);

   videoPlayer.addEventListener('timeupdate',() => {

      const currentTime = videoPlayer.currentTime;
      const duration = videoPlayer.duration;

      videoProgress.value = currentTime / duration * 100;

      let minutPassed = Math.floor( currentTime / 60);
      let secondsPassed = Math.floor( currentTime % 60);

      let minutTotal = Math.floor( duration / 60);
      let secondsTotal = Math.floor( duration % 60);

      videoTimePassed.textContent = `${addZero(minutPassed)}:${addZero(secondsPassed)}`;
      videoTimeTotal.textContent = `${addZero(minutTotal)}:${addZero(secondsTotal)}`;

   });

   videoProgress.addEventListener('input', () => { 

      const duration = videoPlayer.duration;
      const value = videoProgress.value;
      
      videoPlayer.currentTime = (value * duration) / 100;

   })

   videoVolume.addEventListener('input', () => {

      videoPlayer.volume = videoVolume.value/100 ;

   } )
   
   videoVolume.value = videoPlayer.volume*100;

}