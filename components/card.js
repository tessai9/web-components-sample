class CardComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
    <div class="card">
      <div class="card-header"></div>
      <div class="card-body"></div>
    </div>`;

    shadow.appendChild(this.css());
  }

  connectedCallback() {
    const headerText = this.getAttribute('headerText');
    const bodyText = this.getAttribute('bodyText');

    this.shadowRoot.querySelector('.card-header').textContent = headerText;
    this.shadowRoot.querySelector('.card-body').textContent = bodyText;
  }

  css() {
    const styleElm = document.createElement('style');
    styleElm.textContent = `
    .card {
      max-width: 300px;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 2px 2px 4px;
      margin-bottom: 1rem;
    }

    .card-header {
      padding: 5px 10px;
      font-size: 16px;
      font-weight: bold;
      border-bottom: 1px solid #C0C0C0;
    }

    .card-body {
      padding: 10px;
    }`;

    return styleElm;
  }
}

customElements.define('card-component', CardComponent);
