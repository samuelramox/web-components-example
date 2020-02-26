class CustomHeader extends HTMLElement {
  constructor() {
    super();
    const link = document.querySelector('link[rel=import]');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = link.import.querySelector('#custom-header');
    shadowRoot.appendChild(template.content);
  }
}
customElements.define('custom-header', CustomHeader);
