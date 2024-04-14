const container = document.getElementsByClassName('container')
const mainvideo = document.querySelector('video')
const playPauseBtn = document.getElementById("playpause")
const skipBackward = document.getElementById('skipbackward')
const skipFrontward = document.getElementById('skipfrontward')
// const volumeBtn = document.querySelector('')
// const volumeSlider = document.querySelector('')
// const progressBar = document.querySelector('')
// const videoTimeLine = document.querySelector('')
// const speedBtn = document.querySelector('')
// const speedOptions = document.querySelector('')
// const picInPic = document.querySelector('')
// const currentVideoTime = document.querySelector('')
// const videoDuration = document.querySelector('')
// const fullscreenBtn = document.querySelector('')
// const loader = document.querySelector('')

console.log(playPauseBtn)

//play
playPauseBtn.addEventListener('click', () => {
  mainvideo.paused ? mainvideo.play() : mainvideo.pause();
  mainvideo.paused ? playPauseBtn.querySelector("img").src = './icons/play.svg' : playPauseBtn.querySelector("img").src = './icons/pause.svg';
})

//voltar
skipBackward.addEventListener('click', () => {
  mainvideo.currentTime -= 5
})

//avançar
skipFrontward.addEventListener('click', () => {
  mainvideo.currentTime += 5
})
