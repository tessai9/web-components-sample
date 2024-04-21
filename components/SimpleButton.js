class SimpleButton extends HTMLButtonElement {
  constructor() {
    super();

    this.setAttribute("style", this.style());

    const buttonText = this.dataset.buttonText;
    this.innerText = buttonText ? buttonText : "シンプルボタン";

    console.log(this);
  }

  connectedCallback() {
    this.addEventListener("click", () => {
      window.alert("clicked");
    });
  }

  style() {
    return `
      background-color: #ff4500;
      color: #fff;
      padding: 10px;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
    `;
  }
}

customElements.define("simple-button", SimpleButton, { extends: "button" });
