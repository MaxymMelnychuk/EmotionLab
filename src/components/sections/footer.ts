export default function Footer(): HTMLElement {
    const div = document.createElement('footer');
    div.classList.add("footer");
    div.innerHTML = `By Emotion Lab 2026`;
    return div;
}