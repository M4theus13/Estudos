function startVideoFromCamera() {

    const specs = {video:{width:320}}

    navigator.mediaDevices.getUserMedia(specs).then(stream => {
        const videoElement = document.getElementById('video')
        videoElement.srcObject = stream
        
    }).catch(error=>{console.log(error)})
}

window.addEventListener('DOMContentLoaded', startVideoFromCamera)
const button = document.getElementById('capture')
button.addEventListener('click', () => {
    const canvas = document.getElementById('foto')
    canvas.height = video.height
    canvas.width = video.width


    const context = canvas.getContext('2d')
    canvas.drawImage(video, 0,0)

    const link = document.createElement('a')
    link.download = 'foto.png'
    link.href = canvas.toData()
    link.textContent = 'Clique para baixar a imagem'
    document.body.appendChild(link)
})