export default function Sadness(): HTMLElement {
    const div = document.createElement('div');
    div.classList.add("sadness", "container");
    div.innerHTML = `<p>Sadness</p>`;
    return div;
}
