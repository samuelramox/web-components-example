const title = document.createElement('h2');
title.textContent = 'Counter with script';
const xCounter = document.createElement('x-counter');
xCounter.dataset.counter = 90;
document.body.appendChild(title);
document.body.appendChild(xCounter);

class Counter extends HTMLElement {
  constructor() {
    super();
    const outterCounter = this.dataset.counter;
    this.counter = outterCounter || 0;
  }

  connectedCallback() {
    this.innerHTML = `
        <button id="counterButton">Counter</button>
        <p id="showCounter">0</p>
      `;
    const paragraph = this.querySelector('#showCounter');
    paragraph.textContent = this.counter;
    const button = this.querySelector('#counterButton');
    button.addEventListener('click', () => {
      this.counter++;
      paragraph.textContent = this.counter;
    });
  }
}

customElements.define('x-counter', Counter);
