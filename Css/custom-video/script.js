const container = document.getElementsByClassName('container')
const mainvideo = document.querySelector('video')
const playPauseBtn = document.getElementById("playpause")
const skipBackward = document.getElementById('skipbackward')
const skipFrontward = document.getElementById('skipfrontward')
const volumeBtn = document.getElementById('volume-icon')
const volumeSlider = document.getElementById('volume-slide')
// const progressBar = document.querySelector('')
// const videoTimeLine = document.querySelector('')
// const speedBtn = document.querySelector('')
// const speedOptions = document.querySelector('')
// const picInPic = document.querySelector('')
// const currentVideoTime = document.querySelector('')
// const videoDuration = document.querySelector('')
// const fullscreenBtn = document.querySelector('')
const loader = document.querySelector('.loader')

//play
playPauseBtn.addEventListener('click', () => {
  mainvideo.paused ? mainvideo.play() : mainvideo.pause();
  mainvideo.paused ? playPauseBtn.querySelector("img").src = './icons/play.svg' : playPauseBtn.querySelector("img").src = './icons/pause.svg';
  mainvideo.paused ? loader.style = 'display:block' : loader.style = 'display:none'
})

//voltar
skipBackward.addEventListener('click', () => {
  mainvideo.currentTime -= 5
})

//avançar
skipFrontward.addEventListener('click', () => {
  mainvideo.currentTime += 5
})

console.log(volumeSlider)
console.log(volumeBtn)

//volume
volumeBtn.addEventListener('click', () => {
  if (mainvideo.volume == 0) {
    mainvideo.volume = 0.5
    volumeSlider.value = 0.5
    volumeBtn.querySelector('img').src = './icons/volume-baixo.svg'
    console.log('volume baixo')
    console.log(volumeSlider.value)
  } else {
    mainvideo.volume = 0.0
    volumeSlider.value = 0.0
    volumeBtn.querySelector('img').src = './icons/volume-mute.svg'
    console.log('volume mutado')
    console.log(volumeSlider.value)
  }
})

//volume TEM Q MUDAR AINDA
volumeSlider.addEventListener('click', () => {
  console.log('mexeu')
  if (volumeSlider.value == 0) {
    volumeBtn.querySelector('img').src = './icons/volume-mute.svg'
    console.log('mutado')

  } else if ( volumeSlider.value <= 0.5) {
    volumeBtn.querySelector('img').src = './icons/volume-baixo.svg'
    console.log('medio')

  } else {
    volumeBtn.querySelector('img').src = './icons/volume-alto.svg'
    console.log('alto')
  }
})