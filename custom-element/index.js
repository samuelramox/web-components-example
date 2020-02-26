class CustomComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<p>Creating our first component using Custom Elements<p>`;
  }
}

customElements.define('custom-component', CustomComponent);
