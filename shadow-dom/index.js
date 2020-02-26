let myElement = document.querySelector('.my-element');
let shadow = myElement.attachShadow({
  mode: 'open'
  // mode: 'closed'
});

shadow.innerHTML = `
  <style>
    p {
      color: red;
    }
  </style>

  <p>Element with Shadow DOM</p>
`;

class CustomHeader extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
    <style>
      h1 {
        color: red;
      }
    </style>

    <header>
      <h1>My website</h1>
      <h2><slot>The best website</slot></h2>
    </header>
    `;
  }
}
customElements.define('custom-header', CustomHeader);
