console.log("Wellcome to Spotify")

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Tum Se Hi", filePath: "songs/1.mp3" , coverPath: "covers/1.jpeg"},
    {songName: "Tumse-Mohabbat-Hai", filePath: "songs/2.mp3" , coverPath: "covers/2.jpg"},
    {songName: "Te Amo (Dum Maro Dum)", filePath: "songs/3.mp3" , coverPath: "covers/3.jpeg"},
    {songName: "Kya Mujhe Pyar Hai", filePath: "songs/4.mp3" , coverPath: "covers/4.jpeg"},
    {songName: "Aao Milo Chalo", filePath: "songs/5.mp3" , coverPath: "covers/5.jpeg"},
    {songName: "Tu-Jaane-Na", filePath: "songs/6.mp3" , coverPath: "covers/6.jpeg"},
    {songName: "Aa Jao Meri Tamanna", filePath: "songs/7.mp3" , coverPath: "covers/7.jpeg"},
    {songName: "Zindagi Do Pal Ki (Kites)", filePath: "songs/8.mp3" , coverPath: "covers/8.jpeg"},
    {songName: "Zara Sa - Jannat", filePath: "songs/9.mp3" , coverPath: "covers/9.jpeg"},
]

songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
})
// audioElement.play(); 

//Handle play/Pause Click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity= 1;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-pause-circle');
    })
} 


Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity= 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');    
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
})