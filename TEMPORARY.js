const linkHTML = document.querySelector('#link')
const QRgenerate = document.querySelector('#QRgenerate')

QRgenerate.addEventListener('click',(e) => {
    e.preventDefault()
    const img = new Image()
    const link = linkHTML.value
    img.src = `https://api.qrserver.com/v1/create-qr-code/?data=${link}&size=[pixels]x[pixels]`
    document.body.appendChild(img)
})
