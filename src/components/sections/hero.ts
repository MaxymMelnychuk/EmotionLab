export default function Header(): HTMLElement {
    const div = document.createElement('div');
    div.classList.add("hero", "container");
    div.innerHTML = `
    <h1>Emotion Lab</h1>
    <span class="emotion-icon">😊</span>
    <span class="emotion-icon">😢</span>
    <span class="emotion-icon">😨</span>
    <span class="emotion-icon">😡</span>
    <span class="emotion-icon">😍</span>
    `;
    
    return div;
}
