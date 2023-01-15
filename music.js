let audio = document.querySelector('audio');
 let img = document.querySelector('img');
 let title = document.querySelector('.title');
 let artist = document.querySelector('.artist');
 let meter = document.querySelector('.meter');
 let playPause = document.querySelector('.playbtn');
 let clickCount = 0;  
 let n = 0;


// Next and Previous

let previous = document.querySelector("#previous");
let next = document.querySelector("#next");

previous.addEventListener("click", function(){
  n--;
  if(n < 0){
    n = music.length-1;
  }
  start();
});

next.addEventListener("click", function(){
  n++;
  if (n == music.length) {
    n = 0;
  }
  start();
});

// Music Source


let music = [

    {
        "title":"Dear Me",
        "artist":"Unknown",
        "image":"https://www.pequotlibrary.org/wp-content/uploads/2022/03/dear-me.jpg",
        "audio":"audio/dear-me.mp3"   
    },
    
    {
        "title":"BabyDoll × The Perfect Girl",
        "artist":"Unknown",
        "image":"https://i.scdn.co/image/ab67616d00001e02c207c435ad9435ddf62fbad2",
        "audio":"audio/babydoll.mp3"   
    },
    
    {
        "title":"Beauty and A Beat",
        "artist":"Justin Bieber",
        "image":"https://cdn.justjaredjr.com/wp-content/uploads/headlines/2012/10/justin-bieber-beauty-and-a-beat-video.jpg",
        "audio":"audio/beauty-and-a-beat.mp3"   
    },
    
    
    {
        "title":"Metamorphosis",
        "artist":"Unknown",
        "image":"https://i.scdn.co/image/ab67616d0000b2730aa098ea1d7e0da5ab336fad",
        "audio":"audio/metamorphosis.mp3"   
    },
    
    {
        "title":"Close Eye",
        "artist":"DVRST",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy6eCqDziKP92JGhpxygcrHLFZQJCKyxZ2g&usqp=CAU",
        "audio":"audio/close-eye.mp3"   
    },
    
    {
        "title":"CLANDESTINA",
        "artist":"JVSTIN",
        "image":"https://i.ytimg.com/vi/tzJ6U6zqOX8/mqdefault.jpg",
        "audio":"audio/clandestina.mp3"   
    }
    
    /*
    
    {
        "title":"",
        "artist":"",
        "image":"",
        "audio":""   
    },
    
    */
    
   ]




function start(){
   
   
   title.innerText = music[n].title;
   artist.innerText = music[n].artist;
   img.src =music[n].image;
   audio.src = music[n].audio;
  
   
   // Play and Pause Music
   
clickCount++;

  if (clickCount == 1) {
    audio.play();
    
      playPause.innerHTML = '<i class="fa-4x fa-regular fa-circle-pause"></i>';
   
    
  } 
  else if(clickCount == 2){
    audio.pause();
   
    
    playPause.innerHTML="<i class='fa-4x fa-regular fa-circle-play'></i>";
    
    clickCount = 0;
  }
 
 
  
  // Music Duration
  
  audio.addEventListener('loadedmetadata', function() {
  let audiotime = audio.duration;
  meter.max = audiotime;
  // convert into minite amd seconds
  let min = parseInt(audiotime / 60);
  let sec = parseInt(audiotime % 60);
  if(min < 10){
      min = `0${min}`
  }
  if(sec < 10){
      sec = `0${sec}`
  }
document.getElementById('audioDuration').innerText=`${min}:${sec}`;
});


  // Current Music Time
  
  setInterval(function(){
  let currentTime = audio.currentTime;
   meter.value = currentTime;
   
   let min = parseInt(currentTime / 60);
  let sec = parseInt(currentTime % 60);
  if(min < 10){
      min = `0${min}`
  }
  if(sec < 10){
      sec = `0${sec}`
  }
document.getElementById('currentDuration').innerText=`${min}:${sec}`;
   
}, 1);



}
