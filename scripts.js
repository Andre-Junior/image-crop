const photoFile = document.getElementById('photo-file')
let photoPreview = document.getElementById('photo-preview')
let image = new Image()

//Select & Preview image

document.getElementById('select-image')
.onclick= () => {
    photoFile.click()
}

window.addEventListener('DOMContentLoaded', () => {
    photoFile.addEventListener('change', () => {
        let file = photoFile.files.item(0)
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (event) => {
            image.src = event.target.result
        }
    })
})

//Selection tooll

const selection=  document.getElementById('selection-tool')

let startX, startY, relativeStartX, relativeStartY,
endX, endY, relativeEndX, relativeEndY;
let startSelection = false;

const events = {
    mouseover(){
        this.style.cursor = 'crosshair'
    },
    mousedown(){
        const {clientX, clientY, offsetX, offsetY} = event

        startX = clientX
        startY = clientY
        relativeStartX = offsetX
        relativeStartY = offsetY

        startSelection = true
    },
    mousemove(){
        endX = event.clientX
        endY = event.clientY
        
        if(startSelection) {
            selection.style.display = 'initial';
            selection.style.top = startY + 'px';
            selection.style.left = startX + 'px';
        
            selection.style.width = (endX - startX) + 'px';
            selection.style.height = (endY - startY) + 'px';
        }

    },
    mouseup(){
        startSelection = false;

        relativeEndX = event.layerX;
        relativeEndY = event.layerY;
    } 
}

Object.keys(events)
.forEach(eventName => {
    photoPreview.addEventListener(eventName, events[eventName])
})

//Canvas 
let canvas = document.createElement('canvas')
let ctx = canvas.getContext('2d')

image.onload = () => {
    const {width, height} = image
    canvas.width = width
    canvas.height = height

    // limpar o contexto
    ctx.clearRect(0, 0, width, height)

    //desenhar a imagem no contexto 
    ctx.drawImage(image, 0, 0)

    photoPreview.src = canvas.toDataURL()
}