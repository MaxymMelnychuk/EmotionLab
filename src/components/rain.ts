export default function rainEffect(container: Element) {
    let rainDrops = document.createElement('span')
    rainDrops.classList.add('rain-drops')
    container.appendChild(rainDrops)
    rainDrops.style.left = Math.random() * 200 + '%'

    setTimeout(function rainEffect()  {
        rainDrops.remove()
    }, 2000)
}

