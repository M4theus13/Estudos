const video = document.querySelector('video')

navigator.mediaDevices.getUserMedia({video:true}).then(stream => {
    video.srcObject = stream
    video.play()
})
.catch(error => {
    console.log(error)
})

document.querySelector('button').addEventListener('click', () => {
    let canvas = document.querySelector('canvas')
    canvas.height = video.videoHeight
    canvas.width = video.videoWidth

    let context = canvas.getContext('2d')
    context.drawImage(video, 0, 0)
    let link = document.createElement('a')
    link.download = 'foto.png'
    link.href = canvas.toDataURL()
    link.textContent = 'Clique para baixar a imagem'
    document.body.appendChild(link)
})