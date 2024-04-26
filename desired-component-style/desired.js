class NavbarComponent extends HTMLElement {
  connectedCallback() {
    const navbarElm = document.querySelector("template#navbar-template").cloneNode(true);

    fetch('https://tesao.awesome-api.jp/user', { method: 'GET' })
      .then(res => res.json())
      .then(body => {
        const userName = navbarElm.querySelector('.user-name');
        userName.innerText = body.userName;
      });
  }
}

customElements.define('navbar-component', NavbarComponent);
