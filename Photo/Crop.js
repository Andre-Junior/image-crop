export default function(Photo) {

    Photo.cropButton = document.getElementById('crop-image')
    
    Photo.crop = () => {
        const { width: imgW, height: imgH } = Photo.image
        const { width: previewW, height: previewH } = Photo.photoPreview

        const [widthFactor, heightFactor] = [
            +(imgW / previewW),
            +(imgH / previewH)
        ]

        const [selectionWidth, selectionHeight] = [
            +Photo.selection.style.width.replace('px', ''),
            +Photo.selection.style.height.replace('px', '')
        ]

        const [croppedWidth, croppedHeigth] = [
            +(selectionWidth * widthFactor),
            +(selectionHeight * heightFactor)
        ]

        const [actualX, actualY] = [
            +(Photo.relativeStartX * widthFactor),
            +(Photo.relativeStartY * heightFactor)
        ]

        const croppedImage = Photo.ctx.getImageData(actualX, actualY, croppedWidth, croppedHeigth)

        //limpar o ctx do canvas
        Photo.ctx.clearRect(0,0,Photo.ctx.width,Photo.ctx.height)

        Photo.image.width = Photo.canvas.width = croppedWidth;
        Photo.image.height = Photo.canvas.height = croppedHeigth;

        Photo.ctx.putImageData(croppedImage, 0, 0)

        Photo.selection.style.display = 'none'

        Photo.photoPreview.src = Photo.canvas.toDataURL()

        Photo.downloadButton.style.display = 'initial'
    }
}