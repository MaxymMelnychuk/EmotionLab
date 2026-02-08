export default function Fear(): HTMLElement {
    const div = document.createElement('div');
    div.classList.add("fear", "container");
    div.innerHTML = `<p>Fear</p>`;
    return div;
}
