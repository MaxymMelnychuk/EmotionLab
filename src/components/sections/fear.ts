export default function Fear(): HTMLElement {
    const div = document.createElement('div');
    div.classList.add("fear", "container");
    div.innerHTML = `
    <img class="screamer hidden" src="https://png.pngtree.com/png-vector/20240821/ourmid/pngtree-3d-smoky-horror-ghost-girl-on-transparent-background-png-image_13580492.png">
    <p class="emotion_title">Fear</p>
    `;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show')
            }
        })
    })

    requestAnimationFrame(() => {
        const hiddenElement = div.querySelector('.hidden')
        if (hiddenElement) {
          observer.observe(hiddenElement)
        }
    })

    return div;
}

