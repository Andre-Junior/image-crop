export default function(Photo) {

    Photo.downloadButton = document.getElementById('download')

    Photo.download = () => {
        const a = document.createElement('a')
        a.download = Photo.photoName + '-cropped.png';
        a.href = Photo.canvas.toDataURL();
        a.click()
    }
}