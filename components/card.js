class CardComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.innerHTML = ``;
  }
}

customElements.define('card-component', CardComponent);
