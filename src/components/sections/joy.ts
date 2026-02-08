export default function Joy(): HTMLElement {
    const div = document.createElement('div');
    div.classList.add("joy", "container");
    div.innerHTML = `
    <p class="emotion_title">Joy 😊</p>
    <div class="sun">
    `;
    return div;
}
