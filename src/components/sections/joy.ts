export default function Joy(): HTMLElement {
    const div = document.createElement('div');
    div.classList.add("joy", "container");
    div.innerHTML = `<p>Joy</p>`;
    return div;
}
