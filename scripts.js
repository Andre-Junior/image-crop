import Photo from "./Photo/index.js"

window.addEventListener('DOMContentLoaded', () => {
    Photo.load()
})

//Selecionar Imagem
document.getElementById('select-image')
.onclick = () => {
    document.getElementById('photo-file').click()
}

//Cortar imagem
Photo.cropButton.onclick = () => Photo.crop()

//Exportar Imagem
Photo.downloadButton.onclick = () => Photo.download()