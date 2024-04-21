class CardComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.innerHTML = this.html();
    shadow.appendChild(this.css());
  }

  css() {
    const styleElm = document.createElement('style');
    styleElm.textContent = `
    .card {
      max-width: 300px;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 2px 2px 4px;
    }

    .card-header {
      padding: 5px 10px;
      font-size: 16px;
      font-weight: bold;
      border-bottom: 1px solid #C0C0C0;
    }

    .card-body {
      padding: 10px;
    }
    `;

    return styleElm;
  }

  html() {
    const headerText = this.getAttribute('headerText');
    const bodyText = this.getAttribute('bodyText');

    return `
      <div class="card">
        <div class="card-header">
          ${headerText}
        </div>
        <div class="card-body">
          ${bodyText}
        </div>
      </div>`;
  }
}

customElements.define('card-component', CardComponent);
