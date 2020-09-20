const photoFile = document.getElementById('photo-file')

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
            let image = document.getElementById('photo-preview')
            image.src = event.target.result
        }
    })
})