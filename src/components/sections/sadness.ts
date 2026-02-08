import rainEffect from "../rain";

export default function Sadness(): HTMLElement {
    const div = document.createElement('div');
    div.classList.add("sadness", "container");
    div.innerHTML = `<p class="emotion_title">Sadness</p>`;

    setInterval(() => {
        rainEffect(div)
    }, 1)
    
    return div;
}
